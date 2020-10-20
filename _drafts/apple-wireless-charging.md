---
layout: post
title:  "Apple and Qi Wireless Charging"
date:   2020-10-14
categories: technology
tags: apple, wireless-charging, airpower, magsafe
comments: true
---

# Apple and Qi Wireless Charging

Depending on who you ask Apple is either too slow or too fast to adopt new technologies.
On one hand Apple never put a Blue-ray player into any of their computers, on the other hand they removed all I/O ports on their MacBooks with only USB-C ports, before that standard was even widespread.
It's worth to keep an eye out for these evolutions and make a guess why Apple is making these particular choices.

Apple introduced its first wirelessly charging device in April 2015 with the introduction of the first Apple Watch.
Using the included 5 Watt charger, the watch could be charged to 80% in 1.5h and 100% in 2h.
The Apple Watch uses a proprietary wireless charging protocol, which require the purchase of Apple Watch-specific chargers.
Even though the protocol is based on Qi wireless charging it is not possible to charge an Apple Watch using a 3rd-party wireless charging pad.
Even though the Apple Watch 3 was able to charge on some non-[MFi][mfi] chargers for a [short period of time][apple-watch-3], Apple never enabled this feature fully for all Apple Watch models.

<img srcset="/pictures/2020-10-apple-wireless-charging/apple-watch-charger.jpg 4x" alt="Qi wireless charging logo" class="center-image">

Apple was criticized for not supporting wireless charging on their phones earlier.
High-end Samsung Galaxy phones supported wireless charging since 2015 with the introduction of the Galaxy S6, and even before separate cases and back covers could be bought, that included this feature.

In the early days of wireless charging there were two competing standard: Qi from the [WPC][wpc] (Wireless Power Consortium) and Powermat from [PMA][pma] (Power Matters Alliance).
Both standards were supported by different large-scale player, PMA was backed by Starbucks, AT&T and Delta Airlines whereas the Qi standard had MacDonald's, Verizon and Nokia behind it.
While not very different from an electrical perspective they used different protocols and thus were not inter-compatible.
In fact early devices, such as the Samsung Galaxy S6, supported both standards.

<img srcset="/pictures/2020-10-apple-wireless-charging/qi-logo.svg 2x" alt="Qi wireless charging logo" class="center-image">

Apple introduced wireless charging to its iPhone lineup in September 2017 with the iPhone 8 (Plus) and iPhone X.
Apple chose to use the Qi standard for wireless charging in their phones, which has been included in every model released since.
They were also the first iPhones to re-introduce glass back covers since the iPhone 4S (2013), as wireless charging does not work through a metal enclosures.
The PMA standard hasn't made it into many consumer technology products since, virtually ending the wireless standards war.
This shows how much weight Apple and it's ecosystem pull behind it, once Apple makes a decision it is likely to stick with it long term and other will follow (i.e. removing the headphone jack)

<img srcset="/pictures/2020-10-apple-wireless-charging/native-union-wireless-charger.jpg 4x" alt="Qi wireless charging logo" class="center-image">

Apple doesn't like to introduce new hardware for the sake of it, they like to have a long term strategy.
When the first iPhones with wireless charging shipped, the Qi charging speed was capped at 5W.
It was only later that year that Apple enabled faster 7.5W charging via a software update in iOS 11.2.

Another interesting episode from Apple history with wireless charging is AirPower.
Announced in September 2017, along the highly anticipated iPhone X, this wireless charging mat was supposed to be able to charge 3 devices at once, including the Apple Watch (which does not use the Qi charging standard).
After many months of rumors and anticipation for the device, Apple [canceled][airpower-cancelled] the device citing high standard, many believing that they have run into issues with heat management.

<img srcset="/pictures/2020-10-apple-wireless-charging/apple-airpower.png 2x" alt="Qi wireless charging logo" class="center-image">

In October 2020, 3 years after AirPower was announced, Apple is shipping its first Apple-branded wireless charger, dubbed 'MagSafe', in a nod to the original MacBook magnetic charger.
It work by perfectly aligning the charging coils with the help oh a ring of magnets, which allows it to charge the new iPhones at 15 Watt speeds.
It is still to be seem whether this charger will also charge non-Apple devices and at which speed.
In addition Apple will also be using these magnets to create an ecosystem of accessories, such as cases, stands and phone holders, that which will snap onto the device.
This technology also seems to be stackable such that you can use a case, a wallet and a charging mat combined!
No reviewer has yet had their hand on the new devices, so it is not clear yet how well this will work in practice.

<img srcset="/pictures/2020-10-apple-wireless-charging/apple-magsafe.jpg 4x" alt="Qi wireless charging logo" class="center-image">

It is rumored that Apple wants to move to en entirely port-less iPhone design in the coming years (which is probably also the reason why no iPhone with USBC will ever exist).
To achieve this, they need to provide a viable alternative for wired fast charging, which is going up to 20 Watt via USBC PD (Power Delivery) on the 2020 iPhone lineup.

It's a very Apple-like approach to build a proprietary solution on top of an existing open source standard.
It will be interesting to see how many 3rd parties will integrate with this new feature, but it is clear that Apple bets on this technology and we will see more devices which include it going forward.
As the AirPods cases and Apple Watches are smaller that the ring of magnets it will be interesting which integration they will provide when their next iterations will be announced.
It might be the best of both world, being able to use any wireless charging mat (at a reduced speed) while getting the best experience with an iPhone-specific MagSafe charger.

<!--- used: --->

[mfi]: https://developer.apple.com/programs/mfi/
[apple-watch-3]: https://www.theverge.com/circuitbreaker/2017/9/22/16349480/apple-watch-series-3-qi-wireless-charging
[wpc]: https://www.wirelesspowerconsortium.com
[pma]: https://powermat.com
[airpower-cancelled]: https://techcrunch.com/2019/03/29/apple-cancels-airpower-product-citing-inability-to-meet-its-high-standards-for-hardware/
<!--- unused: --->
[pma-vs-wpc]: https://www.androidauthority.com/pma-vs-wpc-wireless-charging-601871/
[qi-standard]: https://en.wikipedia.org/wiki/Qi_(standard)
[apple-watch]: https://en.wikipedia.org/wiki/Apple_Watch
[apple-iphone]: https://en.wikipedia.org/wiki/IPhone

![Qi wireless charging Logo](pictures/2020-10-apple-wireless-charging/qi-logo.svg)

<!---
03.2015: Samsung Galaxy S6
04.2015: Apple Watch (series 0) (80% in 1.5h, 100% in 2h)
11.2017: iPhone X, iPhone 8 (Plus) 7.5 Watt Qi Wireless charging (5 Watt before iOS 11.2 was out) (18 Watt fast charging)
09.2020: Apple Watch series 6 (80% in 1h, 100% in 1.5h)
10.2020: iPhone 12 (Pro) 15 Watt wireless charging via MagSafe, 7.5 Watt via Qi (20 Watt wired PD fast charging)

2012: 5W BPP
2015: 15W EPP
2017: 30W EPP class 0
-->
