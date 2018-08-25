/**
 * Copyright 2017 Tech to Value Co., Ltd. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
$(function() {

  if (!window.firebase || !(firebase.app instanceof Function)) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions.');
  }

  var config = {
    apiKey: "AIzaSyBiWd1xiM3DJg0Z_fOYTp4tu1qaurMbecs",
    authDomain: "scalamatsuri-2018-voting.firebaseapp.com",
    databaseURL: "https://scalamatsuri-2018-voting.firebaseio.com",
    projectId: "scalamatsuri-2018-voting",
    storageBucket: "scalamatsuri-2018-voting.appspot.com",
    messagingSenderId: "739573211191"
  };
  firebase.initializeApp(config);


  var auth     = firebase.auth();
  var database = firebase.database();

  var DEFAULT_SETTINGS = {canVote: false, maxVoting: {'ja': 0, 'en': 0, 'all': 0}};

  var settings     = DEFAULT_SETTINGS;
  var userInfo     = {};
  var favorites    = [];
  var allVoted     = {};
  var votedCount   = 0;
  var pageLang = location.href.replace(/https?:\/\/.*\/(ja|en)\/.*/, "$1");

  var signIn = function(providerMethod) {
    return function() {
      var provider = new firebase.auth[providerMethod]();
      auth.signInWithPopup(provider);
    }
  }
  var signOut = function() {
    auth.signOut();
  }

  // Triggers when the auth state change for instance when the user signs-in or signs-out.
  var onAuthStateChanged = function(user) {
    if (!!user) { // User is signed in!
      var profilePicUrl = user.photoURL;
      var userName = user.displayName;

      $('#user-pic').attr("src", profilePicUrl || '/img/icon/profile_placeholder.png');
      $('#user-name').find('span').text(userName);

      $('#sign-out').show();
      $('#sign-in').hide();
      $('.cfp-voting-required-signin').show();

      initFavorites(user);
      initVoted(user);
      initUserInfo(user);
    } else { // User is signed out!
      $('#sign-out').hide();
      $('#sign-in').show();
      $('.cfp-voting-required-signin').hide();
    }
  }

  var initSettings = function() {
    database.ref('settings').on('value', function(snapshot) {
      settings = snapshot.val() || DEFAULT_SETTINGS;
      $('#max-voting').text('' + settings.maxVoting['all']);
    });
  }

  var initUserInfo = function(user) {
    database.ref('users/' + user.uid + '/info').on('value', function(snapshot) {
      userInfo = snapshot.val() || {};
      if (userInfo.hasTicketCode) {
        $('#register-ticket-code-btn').parent().hide();
        $('#update-ticket-code-btn').parent().show();
        $('#ticket-code').show().find('span').text('Ticket-Code: ' + userInfo.ticketCode);
      } else {
        $('#register-ticket-code-btn').parent().show();
        $('#update-ticket-code-btn').parent().hide();
        $('#ticket-code').hide();
      }
    });
  }

  var initFavorites = function(user) {
    database.ref('users/' + user.uid + '/favorites').on('value', function(snapshot) {
      favorites = snapshot.val() || [];
      var sessionId = extractSessionId();
      if (favorites.indexOf(sessionId) >= 0) {
        $('#add-favorites-btn').hide();
        $('#remove-favorites-btn').show();
      } else {
        $('#add-favorites-btn').show();
        $('#remove-favorites-btn').hide();
      }
      $('div.candidate-row').each(function() {
        var self = $(this);
        var link = self.find('a');
        if (favorites.indexOf(extractSessionId(link.attr('href'))) >= 0) {
          self.addClass('favorite-candidate');
          self.removeClass('unfavorite-candidate');
          self.find('button.remove-favorites-btn').show();
          self.find('button.add-favorites-btn').hide();
        } else {
          self.removeClass('favorite-candidate');
          self.addClass('unfavorite-candidate');
          self.find('button.remove-favorites-btn').hide();
          self.find('button.add-favorites-btn').show();
        }
      });
    });
  }

  var initVoted = function(user) {
    database.ref('users/' + user.uid + '/allvoted').on('value', function(snapshot) {
      allVoted = snapshot.val() || {};
      votedCount = 0;
      $.each(allVoted, function(id, info) { votedCount++; });
      $('#voted-count').text('' + votedCount);
      if (!!allVoted[extractSessionId()]) {
        $('#vote-btn').hide();
        $('#unvote-btn').show();
      } else {
        $('#vote-btn').show();
        $('#unvote-btn').hide();
      }
      $('div.candidate-row').each(function() {
        var self = $(this);
        if (!!allVoted[self.data('file')]) {
          self.addClass('voted-candidate');
          self.removeClass('unvoted-candidate');
          self.find('button.unvote-btn').show();
          self.find('button.vote-btn').hide();
        } else {
          self.removeClass('voted-candidate');
          self.addClass('unvoted-candidate');
          self.find('button.unvote-btn').hide();
          self.find('button.vote-btn').show();
        }
      });
    });
  }

  var addToFavorites = function(sessionId) {
    var user = auth.currentUser;
    if (!user) return false;
    if (favorites.indexOf(sessionId) < 0) {
      favorites.push(sessionId);
      database.ref('users/' + user.uid + '/favorites').set(favorites);
    }
  }
  var removeFromFavorites = function(sessionId) {
    var user = auth.currentUser;
    if (!user) return false;
    if (favorites.indexOf(sessionId) >= 0) {
      var after = favorites.filter(function(e) {return e !== sessionId}); // TODO:
      database.ref('users/' + user.uid + '/favorites').set(after);
    }
  }
  var addToFavoritesInDetail = function() {
    addToFavorites(extractSessionId());
  }
  var removeFromFavoritesInDetail = function() {
    removeFromFavorites(extractSessionId());
  }
  var addToFavoritesInRow = function() {
    var url = $(this).parents('div.candidate-row').find('a').attr('href');
    addToFavorites(extractSessionId(url));
  }
  var removeFromFavoritesInRow = function() {
    var url = $(this).parents('div.candidate-row').find('a').attr('href');
    removeFromFavorites(extractSessionId(url));
  }
  var vote = function(sessionId, language, length) {
    var user = auth.currentUser;
    if (!user) return false;
    if (!settings.canVote) {
      alert(messages['canNotVote'][pageLang]);
      return;
    }
    if (!userInfo.hasTicketCode) {
      var code = registerTicketCode();
      if (!code) return;
    }
    if (votedCount >= settings.maxVoting['all']) {
      alert(messages['overMaxVoting'][pageLang]);
      return;
    }
    if (!allVoted[sessionId]) {
      allVoted[sessionId] = {"language": language, "length": length};
      database.ref('users/' + user.uid + '/allvoted').set(allVoted);
    }
  }
  var unvote = function(sessionId) {
    var user = auth.currentUser;
    if (!user) return false;
    if (!settings.canVote) {
      alert(messages['canNotVote'][pageLang]);
      return;
    }
    if (!!allVoted[sessionId]) {
      delete allVoted[sessionId];
      database.ref('users/' + user.uid + '/allvoted').set(allVoted);
    }
  }
  var voteInDetail = function() {
    var self = $(this);
    vote(extractSessionId(), self.data('language'), self.data('length'));
  }
  var unvoteInDetail = function() {
    unvote(extractSessionId());
  }
  var voteInRow = function() {
    var row = $(this).parents('div.candidate-row');
    vote(row.data('file'), row.data('language'), row.data('length'));
  }
  var unvoteInRow = function() {
    var row = $(this).parents('div.candidate-row');
    unvote(row.data('file'));
  }

  var extractSessionId = function(url) {
    var _url = url || window.location.pathname;
    return _url.replace(/\/(ja|en)\/candidates\/(.*?)\/.*$/, "$2");
  }

  var registerTicketCode = function() {
    var user = auth.currentUser;
    if (!user) return false;
    var ticketCode = prompt(messages['needsTicketCode'][pageLang], (userInfo.ticketCode || ''));
    if (!!ticketCode) {
      var info = {
        'name': user.displayName,
        'email': user.email,
        'providerId': user.providerId,
        'ticketCode': ticketCode,
        'hasTicketCode': true,
        'timestamp': (new Date()).toISOString()
      }
      database.ref('users/' + user.uid + '/info').set(info);
    } else if (ticketCode === '' && !!userInfo.ticketCode) {
      database.ref('users/' + user.uid + '/info').set(null);
    }
    return ticketCode;
  }

  var isFavoritesFiltered = false;
  var isVotedFiltered = false;

  var filterFavorites = function() {
    $('#filter-favorites').hide();
    $('#unfilter-favorites').show();
    isFavoritesFiltered = true;
    renderRows();
  }

  var unfilterFavorites = function() {
    $('#filter-favorites').show();
    $('#unfilter-favorites').hide();
    isFavoritesFiltered = false;
    renderRows();
  }

  var filterVoted = function() {
    $('#filter-voted').hide();
    $('#unfilter-voted').show();
    isVotedFiltered = true;
    renderRows();
  }

  var unfilterVoted = function() {
    $('#filter-voted').show();
    $('#unfilter-voted').hide();
    isVotedFiltered = false;
    renderRows();
  }

  var renderRows = function() {
    $('div.candidate-row').hide();
    if (isFavoritesFiltered && isVotedFiltered) {
      $('div.favorite-candidate.voted-candidate').show(300);
    } else if (!isFavoritesFiltered && isVotedFiltered) {
      $('div.voted-candidate').show(300);
    } else if (isFavoritesFiltered && !isVotedFiltered) {
      $('div.favorite-candidate').show(300);
    } else {
    $('div.candidate-row').show(300);
    }
  }

  initSettings();
  auth.onAuthStateChanged(onAuthStateChanged);

  $('#sign-in-google' ).on('click', signIn('GoogleAuthProvider'));
  $('#sign-in-twitter').on('click', signIn('TwitterAuthProvider'));
  $('#sign-in-github' ).on('click', signIn('GithubAuthProvider'));
  $('#sign-out-btn'   ).on('click', signOut);

  $('#register-ticket-code-btn').on('click', registerTicketCode);
  $('#update-ticket-code-btn'  ).on('click', registerTicketCode);

  $('#vote-btn'            ).on('click', voteInDetail);
  $('#unvote-btn'          ).on('click', unvoteInDetail);
  $('#add-favorites-btn'   ).on('click', addToFavoritesInDetail);
  $('#remove-favorites-btn').on('click', removeFromFavoritesInDetail);

  $('#filter-favorites'    ).on('click', filterFavorites);
  $('#unfilter-favorites'  ).on('click', unfilterFavorites);
  $('#filter-voted'        ).on('click', filterVoted);
  $('#unfilter-voted'      ).on('click', unfilterVoted);

  $('div.candidate-row button.vote-btn'            ).on('click', voteInRow);
  $('div.candidate-row button.unvote-btn'          ).on('click', unvoteInRow);
  $('div.candidate-row button.add-favorites-btn'   ).on('click', addToFavoritesInRow);
  $('div.candidate-row button.remove-favorites-btn').on('click', removeFromFavoritesInRow);

  var messages = {
    'canNotVote': {
      'ja': '投票可能な期間外です。',
      'en': 'It is out of voting period.'
    },
    'overMaxVoting': {
      'ja': '投票可能数を超えています。',
      'en': 'The voting is exceeded.'
    },
    'needsTicketCode': {
      'ja': 'チケット購入時に発行されたチェックインコードを登録してください。',
      'en': 'Please register the Check-In Code when purchasing the ticket.'
    }
  };
});
