---
name: Sahil Sawhney
title: "Building Microservice Based CI/CD pipelines In A Functional Way"
length: 10
audience: Intermediate
language: English
twitter: lihas5
github: sahil-sawhney
icon: https://pbs.twimg.com/profile_images/1091401167706488832/ZKQS9pXS_400x400.jpg
organization: Sr. Software Consultant, Knoldus Inc
tags:
  - Functional Programming
  - DevOps
  - Microservices
suggestions:
  - 1. People who wanna revisit important aspects of functional programming.
  - 2. People who want to understand how the foundation principles of functional programming can make the CI/CD pipeline more reliable and efficient
  - 3. Engineers who wanna understand what all steps must be part of there CI/CD pipeline for microservice based infrastructure.
contributes:
  - 
speaker_experience:
  - Spoke in TechTriveni on the topic "Distributing the SMACK stack - Kubernetes VS DCOS"
    <a href='https://youtu.be/_mVmxosuK1c'>https://youtu.be/_mVmxosuK1c</a>
  - Have conducted several meetups the last one being on the topic "Being Stateful In Kubernetes"
    <a href='https://www.youtube.com/watch?v=c66uBgJ72P8'>https://www.youtube.com/watch?v=c66uBgJ72P8</a>
  - Various inter-organization sessions like "Using Antlr With Scala"
    <a href='https://www.youtube.com/watch?v=9SYTPcj6ic8'>https://www.youtube.com/watch?v=9SYTPcj6ic8</a>
---
With the wide adaptation of functional programming approach, we at Knoldus thought why not apply these learnings to transform our CI/CD pipelines and fabricate them in a way that our system has no side effects and has immutable inputs and outputs so that we deploy what we intend. As an example, we can think of a flow where CI pipeline executing on our build server generates artifacts and docker images (immutable entities) as outputs which are then passed to Deploy pipeline which deploys these artifacts onto testing and finally production without actually making any changes to the functionality
