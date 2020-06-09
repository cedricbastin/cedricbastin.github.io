---
layout: post
title:  ""
date:   2020-06-08
categories: technology
tags: technology, apple, google, coronavirus, findmy
comments: true
---

# Coronavirus tracking

- Story 1: Apple re-using code
- Story 2: Apple Creating a larger network for Apple Tags
- Story 3: companies protecting privacy better than governments

#### Google and Apple announce Coronavirus tracking
Apple and Google surprised everyone when they announced on April 10th that they were working together on a contact tracing App in order to help governments around the world with the fight against the Coronavirus pandemic. This collaboration came as a great surprise for some, but what's arguably more surprising is that they promised to deliver this contract tracing API only a few months later, in May.

**10.04.2020**
https://www.apple.com/newsroom/2020/04/apple-and-google-partner-on-covid-19-contact-tracing-technology/
https://www.blog.google/inside-google/company-announcements/apple-and-google-partner-covid-19-contact-tracing-technology/
"Apple and Google will be launching a comprehensive solution that includes application programming interfaces (APIs) and operating system-level technology to assist in enabling contact tracing."

- Sounds scary, but they don't actually track GPS coordinates
To the confusion of many, 'contact tracing' is indeed very different from 'location tracking'. In fact the proposed solution doesn't involve any location data or nor does it reveal who around you is sick and infected you. It uses cryptographic math tricks to keep all of this information private from other people, government and even and especially from Apple and Google themselves. It uses the Bluetooth Low Energy signal to exchange a constantly changing random identifier with nearby devices (iOS and Android). 

If you want to learn more about the inner working of the API without reading through the specification, there is some very accessible educational content on this online:
Nicky Case https://ncase.me/contact-tracing/
3Brown1Blue https://www.youtube.com/watch?v=D__UaR5MQao "There is a common misconception that this requires tracking people's location "

- They also don't define when you are sick, but they are collaborating with different country's health ministries
At the same time, these tech giants stay away from anything that has to do the medical side of things, be this on how to determine if you actually have the coronavirus or on which steps to take next, how to quarantine etc. They are working directly with health officials in every country who will use the API and, as means for people to identity with their national identification service and for doctors to report if these people are sick. Apple needs to vet every single App that wants to hook into the API in order to avoid illegitimate use and thus it is likely that a single app will exist per country/state.

The Verge 16.04.2020 - https://www.theverge.com/2020/4/16/21222149/apple-google-coronavirus-tracking-questions-data-public-health
https://www.youtube.com/watch?v=b7dxCRm5t5g&t=4s
"At the same time there is a lot that Apple and Google are explicitly not gonna do. They are not building the alert app or setting rules for how to quarantine. They aren't even toughing the question of how you verify that everyone who sends an alert through the app actually is infected."

- Some governments don't want to use the tracing solution
However some governments already started using a track-and-trace programs before the joint announcement of Apple and Google. Some of them also relied on Bluetooth beacon technology in the background, others 

- Apple and Google disabled background Bluetooth access


- When will the tracking go away

- That is very fast code development -> re-using code
3 months between March and May is a very short timeline for any IT project to be finished, not to mention That is a very very short timeline for any company or team, no matter its headcount, to deliver a fully functional, tested and privacy preserving piece of code. Plus they wanted to provide a fully implemented API available to be used by hundreds of different countries so it had to be well thought out from the beginning with little wiggle room to change it afterwards. My suspicion is 

- Find My Phone
In fact Apple is not stranger to p already had location tracking in place

'Find My Mac/iPhone'
15.06.2010 (MobileMe)
device need to be on, connected to the internet and be able to determine its location (GPS, or cellular triangulation)
'Find My Friends'
12.10.2011
location information send encrypted using similar protocol to iMessage

- tracking of offline devices in 2019

04.06.2019 WWDC 2019
 Find My https://youtu.be/psL_5RIBqnY?t=6686 
Craig Federighi: "Now, next, I want to turn to a new solution that helps you find your Mac should it ever be lost or stolen.
It's called Find My. Now, Find My combines Find My iPhone with Find My Friends and it's now available on the Mac and iOS devices as well. And it has a new twist because it can now even locate Apple devices that are offline. Now, this is particularly important for Macs because often your laptop is folded up in a bag, asleep, and no longer on the network.
Now, the way this works is really cool. Let's say you have misplaced your MacBook. So, even when it's offline and sleeping, it sends out a secure Bluetooth beacon that can be detected by other people's Apple devices nearby. Now, they can relay your MacBook's location to the network and ultimately back to you so you can find it. Now, what's amazing is that this whole interaction is end to end encrypted and anonymous. It uses just tiny bits of data that piggyback on existing network traffic, so there is no need to worry about your battery life, your data usage, or your privacy."

- Stopped background tracking
Ironically the same year they also disallowed Apps to use 

Bluetooth background tracking https://youtu.be/psL_5RIBqnY?t=2400 
Now, some apps try to work around these protections by scanning for Bluetooth or Wi-Fi signals to infer your location. Well, we are shutting the door on that abuse as well. => shuts out companies like Tile

- Tile complained

- Apple plans on releasing Apple Tags soon, a network of Android+iOS phones would be a killer feature.

Apple Tags - rumored since late 2019
https://www.macrumors.com/2019/09/20/find-my-items-tab-apple-tag-screenshots/
They use a combination to Bluetooth LE & UWB for precise indoor tracking
competition to Tile

- Apple has a huge amount of devices out there





'Find My' App
19.09.2019 iOS 13 (iCloud) https://www.apple.com/icloud/find-my/
Apple Support - How to https://www.youtube.com/watch?v=dGvaaMAwzB8

05.06.2019 https://www.wired.com/story/apple-find-my-cryptography-bluetooth/
- 'In upcoming versions of iOS and macOS, the new Find My feature will broadcast Bluetooth signals from Apple devices even when they're offline, allowing nearby Apple devices to relay their location to the cloud.'





Specification:
https://www.apple.com/covid19/contacttracing/
https://www.google.com/covid19/exposurenotifications/
inspired by DP3T: https://github.com/DP-3T/dp3t-sdk-backend

20.05.2020 release of iOS 13.5 with Covid notification setting

UK doesn’t want to use Apple’s and Google’s coronavirus contact tracing solution https://bgr.com/2020/04/29/coronavirus-uk-contact-tracing-app-not-built-the-apple-google-way/
Apple, Google update coronavirus contact tracing tech ahead of launch https://www.reuters.com/article/us-apple-google-contact-tracing/apple-google-update-coronavirus-contact-tracing-tech-ahead-of-launch-idUSKCN2262NT?feedType=RSS&feedName=technologyNews Apple and Google will now provide data about Bluetooth power levels to better estimate how close two phones came to each other and for how long, letting authorities set their own thresholds for when to alert people. 
Without the Apple-Google technology, apps built by those governments will face limitations such as needing a phone’s screen to be unlocked to work properly.



