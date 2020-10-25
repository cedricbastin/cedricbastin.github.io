---
layout: post
title: "Apple and Wireless Charging"
date: 2020-10-25
categories: technology
tags: apple, wireless-charging, airpower, magsafe, qi-charging
comments: true
---

Depending on who you ask, Apple is either too slow or too fast to adopt new technologies.
On one hand, Apple never put a Blue-ray player into any of their computers, on the other hand they replaced all MacBook I/O ports with only Thunderbolt 3 (USB-C interface) in 2016 before that standard was widespread, forcing everyone to use adapters to connect their existing peripherals.
It's interesting to keep an eye out for those choices Apple makes, as they take decisions for their long-term strategy, not based on year-over-year trends.
A similar trend can be observed in the way Apple approached wireless charging for its handheld and wearable devices, cautious initially and all-in towards the end.

Apple introduced its first wirelessly charging device in April 2015 with the release of the first Apple Watch.
Using a 5 Watt charger, the watch could charge to 80% in 1.5h and 100% in 2h.
The Apple Watch uses a proprietary wireless charging method, which requires the purchase of an Apple-specific chargers.
Even though the protocol is based on Qi wireless charging it is not possible to charge an Apple Watch using any standard Qi wireless charger.
Initially the Apple Watch series 3 appeared to be able to charge on some non-[MFi][mfi] chargers for a [short period of time][apple-watch-3], however Apple never enabled this feature fully for all Apple Watch models, without explaining their decision.

<img srcset="/pictures/2020-10-apple-wireless-charging/apple-watch-charger.jpg 4x" alt="Apple Watch charger" class="center-image">

Apple was also criticised for not supporting wireless charging on their phones while other manufacturers had already adopted this feature.
High-end Samsung Galaxy phones supported wireless charging since 2015 with the introduction of the Samsung Galaxy S6, even before this, separate cases and back covers which included a wireless charging coil, could be bought separately.

In the early days of wireless charging there were two competing standard: Qi from the [WPC][wpc] (Wireless Power Consortium) and Powermat from [PMA][pma] (Power Matters Alliance).
Both standards were supported by different large-scale player, PMA was backed by Starbucks, AT&T and Delta Airlines whereas the Qi standard had MacDonald's, Verizon and Nokia behind it.
While not very different from an electrical perspective they used different protocols and thus were not inter-compatible.
In fact early devices, such as the Samsung Galaxy S6, supported both standards as it was not clear which standard would become more widespread.
This was a classic case of a [standards war][format-war], similar to Blu-ray vs HD DVD or even JVC VHS vs Sony Betamax.

<img srcset="/pictures/2020-10-apple-wireless-charging/qi-logo.svg 2x" alt="Qi wireless charging logo" class="center-image">

Apple added wireless charging to its iPhone lineup in September 2017 with the iPhone 8 (Plus) and iPhone X.
They chose to use the Qi standard for wireless charging in their phones, which has been included in every iPhone model released since.
They were also the first iPhones to re-introduce glass back covers since the iPhone 4S (2013), as wireless charging does not work on devices with a metal enclosures.
The PMA standard hasn't made it into many consumer technology products since, virtually marking the end of the wireless standards war.
This shows how much weight Apple and its ecosystem pull behind it, once they adopt a technology they will stick with it long-term and competitors are likely to follow them.
This trend can be observed more generally, whether Apple removes the headphone jack or adds Face Unlock to their phones, others will follow.

<img srcset="/pictures/2020-10-apple-wireless-charging/native-union-wireless-charger.jpg 4x" alt="iPhone with Native Union wireless charger" class="center-image">

Apple doesn't introduce new hardware to follow trends or to try out new features, they like to have a long term strategy.
They don't enable features if they would negatively impact end-user experience or reduce the longevity of the device.
When the first iPhones with wireless charging shipped, the Qi charging speed was still capped at 5 Watts.
Later that year, Apple enabled faster 7.5W charging via a software update in iOS 11.2 potentially because they hadn't perfected or tested power management until then.

Another interesting episode of Apple's history with wireless charging is AirPower.
Announced in September 2017, along the highly anticipated iPhone X, this multi-device wireless charging mat was supposed to be able to charge up to 3 devices at once, including the Apple Watch which, as noted earlier, does not use the Qi charging standard.
After many months of rumours and anticipation for the device, Apple [canceled][airpower-cancelled] citing that the device did not meet their high hardware standards, many believing that they ran into issues with [heat management][airpower-heat].
I could imagine that they got AirPower to work with low charging speeds such as 5W, but that the multi-coil design did not allow them to increase the power even further.
Low charging speed would have made the prospect of a port-less iPhone very unappealing.

<img srcset="/pictures/2020-10-apple-wireless-charging/apple-airpower.png 2x" alt="Apple Airpower wireless charger" class="center-image">

In October 2020, 3 years after AirPower was announced, Apple is shipping its first Apple-branded wireless charger dubbed 'MagSafe', the same name used for the original MacBook magnetic charger.
It works by aligning the induction coils with the help of a ring of magnets in both the charger and the device.
This perfect alignment allows it to charge the new iPhones at **15 Watt** speeds without overheating, a problem which other [high-powered wireless charger][anker-7.5] face.
One major downside of regular wireless chargers is that you can't use your device easily while it's charging on a Qi charging mat.
This problem is resolved with MagSafe as the lightweight charging puck will stick to the phone when you pick it up and it will keep charging while you use the device.

In addition Apple will also be using these magnets to create an ecosystem of accessories, such as 3rd party cases, stands and phone holders, which will snap onto the device or hold it in place.
The new iPhones can still charge at normal speed on 3rd party chargers and the MagSafe can charger non-Apple devices at lower speeds.
Personally I like this approach as it bring together the best of both worlds, inter-compatibility based on a standard technology while providing a better experience for people inside the Apple ecosystem.

<img srcset="/pictures/2020-10-apple-wireless-charging/apple-magsafe.jpg 4x" alt="Apple MagSafe 15W wireless charger" class="center-image">

It is rumoured that Apple wants to move to en entirely port-less iPhone design in the coming years (which is also the reason why no iPhone with USB-C will probably never exist).
To achieve this, they need to provide a viable alternative for wired fast charging, which is going up to 20 Watt via USB-C PD (Power Delivery) on the 2020 iPhone lineup.
The current iteration of the Qi wireless charging standard allows for charging speeds up to 30W 

It will be interesting to see how many 3rd parties will integrate with this new feature to benefit from the Apple ecosystem.
Early reviews show that the MagSafe magnets are not very powerful so it is yet to see if 3rd-party integration will be strong enough to create car phone holders or tripod mounts.
I believe that Apple bets on this technology and will introduce more devices with MagSafe in the near future, such as the rumoured AirPods Studio.
As the AirPods wireless charging case and Apple Watches are smaller than the ring of magnets in the MagSafe it is yet unknown which integration they will provide when their next iterations will be introduced.

<!--- used: --->

[mfi]: https://developer.apple.com/programs/mfi/
[apple-watch-3]: https://www.theverge.com/circuitbreaker/2017/9/22/16349480/apple-watch-series-3-qi-wireless-charging
[wpc]: https://www.wirelesspowerconsortium.com
[pma]: https://powermat.com
[format-war]: https://en.wikipedia.org/wiki/Format_war
[airpower-cancelled]: https://techcrunch.com/2019/03/29/apple-cancels-airpower-product-citing-inability-to-meet-its-high-standards-for-hardware/
[airpower-heat]: https://daringfireball.net/2018/09/iphone_xs_xr_series_4_apple_watch_event
[anker-7.5]: https://www.anker.com/products/variant/powerwave-75-stand-with-internal-cooling-fan/B2522122
<!--- unused: --->
[pma-vs-wpc]: https://www.androidauthority.com/pma-vs-wpc-wireless-charging-601871/
[qi-standard]: https://en.wikipedia.org/wiki/Qi_(standard)
[apple-watch]: https://en.wikipedia.org/wiki/Apple_Watch
[apple-iphone]: https://en.wikipedia.org/wiki/IPhone

<!---
NOTES:

03.2015: Samsung Galaxy S6
04.2015: Apple Watch (series 0) (80% in 1.5h, 100% in 2h)
11.2017: iPhone X, iPhone 8 (Plus) 7.5 Watt Qi Wireless charging (5 Watt before iOS 11.2 was out) (18 Watt fast charging)
09.2020: Apple Watch series 6 (80% in 1h, 100% in 1.5h)
10.2020: iPhone 12 (Pro) 15 Watt wireless charging via MagSafe, 7.5 Watt via Qi, 20 Watt wired USB-C PD fast charging

Qi charging:
2012: 5W BPP
2015: 15W EPP
2017: 30W EPP class 0
-->
