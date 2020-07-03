---
layout: post
title:  ""
date:   2020-06-08
categories: technology
tags: technology, apple, google, coronavirus, findmy, tile
comments: true
---

# Coronavirus tracking

<!--
- Story 1: Apple re-using code
- Story 2: Apple Creating a larger network for Apple Tags
- Story 3: companies protecting privacy better than governments
-->

<!-- Google and Apple announce shared effort for contact tracing -->

Apple and Google surprised everyone when they announced on April 10th that they were working together on a contact tracing App in order to help governments around the world in the fight against the Coronavirus pandemic. This collaboration came as a great surprise, but what's arguably more surprising is that they promised to deliver this contract tracing API only a few months later, in May.

**10.04.2020 shared press releases**
*"Apple and Google will be launching a comprehensive solution that includes application programming interfaces (APIs) and operating system-level technology to assist in enabling contact tracing."*
[Apple press release][apple-coronavirus-newsroom] [Google press release][google-coronavirus-newsroom]

[apple-coronavirus-newsroom]: https://www.apple.com/newsroom/2020/04/apple-and-google-partner-on-covid-19-contact-tracing-technology/
[google-coronavirus-newsroom]: https://www.blog.google/inside-google/company-announcements/apple-and-google-partner-covid-19-contact-tracing-technology/

<!-- It won't track location data, only 'contacts' -->

The proposed solution should allow user to track which people they have been in close proximity with and, in case they fall sick, notify those people that they might also be a risk.
Indeed 'contact tracing' is very different from 'location tracking', which would require that a user's geographical location data would be stored and potentially shared with their respective governments. In fact the proposed solution doesn't even require or allow you to know who would have infected you, or vice-versa, who got sick from you. It uses cryptographic math tricks to keep all of this information private from other people, governments and even and especially from Apple and Google themselves. It uses a Bluetooth Low Energy signal to constantly check which other devices (iOS and Android) are nearby and exchange some uniquely identifiable information with the,.
It does so in the background, without the need for any app to be open nor too much battery power being consumed because this process is handled by iOS/Android directly. 
**mathematical and cryptographic explanations**
If you want to learn more about the inner working of the API, here is some very accessible educational content on this online.
*"There is a common misconception that this requires tracking people's location."*
[Nicky Case Comic][nicky-case-blog], [3Brown1Blue Youtube Video][3brown1blue-video]

[nicky-case-blog]: https://ncase.me/contact-tracing/
[3brown1blue-video]: https://www.youtube.com/watch?v=D__UaR5MQao 

<!-- They also don't define when you are sick, but they are collaborating with different country's health ministries -->

At the same time, these tech giants are not trying to get involved in the medical side of this process, they do not detect if you have the coronavirus nor do they define which steps to take if you are sick.
Thus this API is not available for general developers, but can only be used by select few health apps which are being developed by each  They are working directly with health officials in every country who will use the API and, as means for people to identity with their national identification service and for doctors to report if these people are sick.[*][techcrunch] Apple needs to vet every single App that wants to hook into the API in order to avoid illegitimate use and thus it is likely that a single app will exist per country/state.

[techcrunch]: [https://techcrunch.com/2020/04/13/apple-google-coronavirus-tracing/]

**16.04.2020 The Verge - the biggest unanswered question**
*"At the same time there is a lot that Apple and Google are explicitly not gonna do. They are not building the alert app or setting rules for how to quarantine. They aren't even toughing the question of how you verify that everyone who sends an alert through the app actually is infected."*
[article][the-verge-post] and [video][the-verge-video]

[the-verge-post]: https://www.theverge.com/2020/4/16/21222149/apple-google-coronavirus-tracking-questions-data-public-health
[the-verge-video]: https://www.youtube.com/watch?v=b7dxCRm5t5g&t=4s

<!-- Some governments don't want to use the tracing solution -->

However some governments already started using a track-and-trace Apps before the joint announcement of Apple and Google. Some of them also relied on Bluetooth beacon technology in the background, some also forwarded geo-location as well as information about who met up with whom to a centralized database.
These practices have been condemned by privacy experts (SOURCE?).
Even so, there are still countries building their own solutions for contact tracing apps 

**25.04.2020 Businessinsider - Apple is locked in a power battle with the UK, France, (and Germany)**
*"If apps collect more data than basic privacy-preserving identifiers, it would almost certainly need to be stored in a centralized way by health authorities or governments, experts told Business Insider. This is what Apple and Google oppose, instead favouring a decentralized approach."*
[Businessinsider article][businessinsider]

[businessinsider]: https://www.businessinsider.com/france-uk-apple-contact-tracing-apps-2020-4

<!-- When will the tracking solution go away? -->

Apple and Google have said that the contact-tracing technology will go away after the pandemic.[*][recode]
However it's not clear what will be considered the end of the pandemic.
It is easy to see that a technology built by two of the largest tech companies in the world, combined with the support of many governments around the world could be used for other causes.
For instance it could be used for crime tracking, to see which people were in the vicinity of the victim before an attack happened.
It will be interesting to see how this collaboration between the two companies and various governments around the world will evolve.

[recode]: https://www.vox.com/recode/2020/4/16/21221458/apple-google-contact-tracing-app-coronavirus-covid-privacy

#### That is very fast code development -> re-using code

3 months between March and May is a very short timeline for any IT project to be finished, not to mention That is a very very short timeline for any company or team, no matter its headcount, to deliver a fully functional, tested and privacy preserving piece of code. Plus they wanted to provide a fully implemented API available to be used by hundreds of different countries so it had to be well thought out from the beginning with little wiggle room to change it afterwards. My suspicion is 

#### Apple and Google disabled background Bluetooth access

#### Find My Phone

In fact Apple is not stranger to p already had location tracking in place

#### 'Find My Mac/iPhone'

15.06.2010 (MobileMe)c
device need to be on, connected to the internet and be able to determine its location (GPS, or cellular triangulation)
'Find My Friends'
12.10.2011
location information send encrypted using similar protocol to iMessage

#### tracking of offline devices in 2019

**04.06.2019 WWDC 2019**

[Fing My][wwdc-find-my-video]
*Craig Federighi: "Now, next, I want to turn to a new solution that helps you find your Mac should it ever be lost or stolen.
It's called Find My. Now, Find My combines Find My iPhone with Find My Friends and it's now available on the Mac and iOS devices as well. And it has a new twist because it can now even locate Apple devices that are offline. Now, this is particularly important for Macs because often your laptop is folded up in a bag, asleep, and no longer on the network.
Now, the way this works is really cool. Let's say you have misplaced your MacBook. So, even when it's offline and sleeping, it sends out a secure Bluetooth beacon that can be detected by other people's Apple devices nearby. Now, they can relay your MacBook's location to the network and ultimately back to you so you can find it. Now, what's amazing is that this whole interaction is end to end encrypted and anonymous. It uses just tiny bits of data that piggyback on existing network traffic, so there is no need to worry about your battery life, your data usage, or your privacy."*

#### Stopped background tracking

Ironically the same year they also disallowed Apps to use 
=> shuts out companies like Tile

[Bluetooth background][wwdc-bluetooth-ackground-tracking-video]
*Craig Federighi: "Now, some apps try to work around these protections by scanning for Bluetooth or Wi-Fi signals to infer your location. Well, we are shutting the door on that abuse as well."*

#### Tile complained

#### Apple plans on releasing Apple Tags soon, a network of Android+iOS phones would be a killer feature.

#### Apple Tags - rumored since late 2019
[macrumors-apple-tags]
They use a combination to Bluetooth LE & UWB for precise indoor tracking
competition to Tile

#### Apple has a huge amount of devices out there

## References

'Find My' App
19.09.2019 iOS 13 (iCloud) [apple-find-my-website]
Apple Support - How to [apple-find-my-howto-video]

05.06.2019 [wired-find-my]
- 'In upcoming versions of iOS and macOS, the new Find My feature will broadcast Bluetooth signals from Apple devices even when they're offline, allowing nearby Apple devices to relay their location to the cloud.'


20.05.2020 release of iOS 13.5 with Covid notification setting

UK doesn’t want to use Apple’s and Google’s coronavirus contact tracing solution https://bgr.com/2020/04/29/coronavirus-uk-contact-tracing-app-not-built-the-apple-google-way/
Apple, Google update coronavirus contact tracing tech ahead of launch https://www.reuters.com/article/us-apple-google-contact-tracing/apple-google-update-coronavirus-contact-tracing-tech-ahead-of-launch-idUSKCN2262NT?feedType=RSS&feedName=technologyNews Apple and Google will now provide data about Bluetooth power levels to better estimate how close two phones came to each other and for how long, letting authorities set their own thresholds for when to alert people. 
Without the Apple-Google technology, apps built by those governments will face limitations such as needing a phone’s screen to be unlocked to work properly.

This is the first time such a wide reaching global project has been done. It's interesting to see how different countries react to the collaboration with tech companies to develop a shared solution. Who trusts whom an 


[wwdc-find-my-video]: https://youtu.be/psL_5RIBqnY?t=6686
[wwdc-bluetooth-ackground-tracking-video]: https://youtu.be/psL_5RIBqnY?t=2400
[macrumors-apple-tags]: https://www.macrumors.com/2019/09/20/find-my-items-tab-apple-tag-screenshots/
[apple-find-my-website]: https://www.apple.com/icloud/find-my/
[apple-find-my-howto-video]: https://www.youtube.com/watch?v=dGvaaMAwzB8

Not referenced yet:

[wired-find-my]: https://www.wired.com/story/apple-find-my-cryptography-bluetooth/
[apple-tracking-spec]: https://www.apple.com/covid19/contacttracing/
[google-tracking-spec]: https://www.google.com/covid19/exposurenotifications/
inspired by

[DP3T-algorithm]: https://github.com/DP-3T/dp3t-sdk-backend
