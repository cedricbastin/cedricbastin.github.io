---
layout: post
title:  "How to sort personal photos"
date:   2020-08-13
categories: technology
tags: technology, tools, standards
comments: true
---

<!-- HISTORY AND BACKGROUND -->

Digital Cameras have been around for many decades, but how do you keep those photos organized for the next years to come?
Digital photos come with the disadvantage that you don't stumble upon them in a box in the attic, but they are however much more convenient to store, especially in large numbers.
Thus people take a lot more photos than before, so organizing them becomes key to having a collection that stays enjoyable as it grows.
I won't be talking about professional tools such as Lightroom, as these media libraries might become obsolete in the future.
A personal photo collection should be stable and survive without relying on proprietary software to manage them. 

<!-- APPLE PHOTOS & GOOGLE PHOTOS -->

As we take most of our personal photos using smartphones, it is the easiest to use the tools that come with them, namely Apple Photos (iPhone/iOS) and Google Photos (Android & iOS).
These tools provide great discoverability as they allow tagging people, searching for objects and events and even showing photos' locations on a map.

<div class="row">
	<div class="column">
		<img src="/pictures/2020-08-sort-photos/apple-photos.png" alt="Apple Photos keyword search">
	</div>
	<div class="column">
		<img src="/pictures/2020-08-sort-photos/google-photos.png" alt="Google Photos map view">
	</div>
</div>

These tools offer great solutions for photos taken in the most recent years.
For instance I sync all of my iPhone photos to iCloud, but I do not upload my older photos.
These services also require a paid subscription, or come with other disadvantages, such as downscaling the resolution in the case of Google's unlimited storage.
Still, the main issue is that it is uncertain how long these services will be operating for.
I went through the painful transition from *Google Picasa* to *Apple iPhoto* before landing on *Apple Photos*.
With each transition I spent too much time creating albums and tagging people's faces.
More recently, I stopped forcing my own vision onto these tools and I only use them for what they are capable of, without trying to manage all of my older photos with them.

It is great to know that photos from different devices are backed up in the cloud but from time to time it is important to copy them onto a local computer as well.

<!-- FILES AND FOLDERS -->

Storing photos for a longer time benefits from having a basic and well established system to do so; namely files & folders on a personal computer.
This facilitates sharing and transferring photos to friends and family, as well as creating backups onto an external hard-drive.
The major disadvantage is that photos cannot be in multiple albums at once, like *nature*, *friends* and *hiking*.
The universal structure for storing has to be intuitive and easily browsable, so I chose the chronological order rather than a theme-based solution (*parties*, *holidays*, *at home*...).

<!-- FOLDERS ARE ALBUMS -->

<img srcset="/pictures/2020-08-sort-photos/album-names.png 2x" alt="folder album names" class="center-image">

As most photos are related to an event at a specific date and time, larger chunks of photos should be grouped together into folders that have a very descriptive name.
This is the only way of searching for a specific photo, while relying on the file browser's search functionality (e.g. `John hike 2003`).
The computer cannot sort folders chronologically when the date is provided in a human preferred format such as `March 12 2011 hiking with Jane in Scotland`. 
I use date and time in the [Asian](https://en.wikipedia.org/wiki/Date_and_time_notation_in_Asia#Date) notation `YYYY-MM-DD` to prefix the album (folder) names.
This will make it very straightforward to get a nice chronological view of all the albums.
This would not work if the European `DD-MM-YYYY` or American `MM-DD-YYYY` format is used.

Sometimes there are are loose single shots that don't really belong to any event but it's also not useful to create a separate folder just for them, so adding them to the previous event can be a reasonable solution.

<!-- CHUNKS OF 5 YEARS -->

<img srcset="/pictures/2020-08-sort-photos/album-context.png 2x" alt="folder album context name" class="center-image">

This method will however create an endless list of albums to scroll through, which is not desirable.
So I created a nested structure to group together several chronologically related albums.
I used to have category-folders such as *family*, *friends* and *school*, but since some events are shared between more categories I was unsure where to place them, or where to find them afterwards.
Going back to the idea of chronological sorting, I defined *'context'* folders which are chunks of ~5 years that have a clearly defined timespan without overlapping with one another.
For instance *Highschool*, *University*, *Job 1*, *Job 2* etc.
This doesn't mean that all photos in the *University* super-folder are actually university-related. 
It only means that they are from that specific *time period*, even if the photos are actually from from my parents' home or a holiday.

<!-- FAVORITES AND PRINTS -->

We take a lot of digital photos, often even multiple photos of the same subject just to be sure there is at least one good shot.
Thus the value of each individual photo is reduced until the album is curated down to a small selection.
To fix this, I create sub-folders for each album either named `selection` or `rejected` which help separating the good shots from the less favorable ones.
Another recurring issue is how to mark the best shots for creating a photo-book or printing out some photos. 
In order to keep track of those I use `tags` feature in Mac's Finder.
This is of course a less permanent solution as these tags will not be transferred if I copy folders to Windows, but I believe they fulfill their purpose well enough for the time being.

<img srcset="/pictures/2020-08-sort-photos/album-rejected.png 2x" alt="rejected photos sub-folder" class="center-image">

<!-- METADATA AND SMART FOLDERS -->

A lot of hidden value of photos actually come from their metadata which includes date&time, geo-location tag, device&lens information etc.
This data can be used to surface relevant photos using *Smart Folder* on Mac's Finder.
They help to get around the limitation that a single photo can only be in a single folder at the same time by creating a symbolic link to the original file.

Even though I have all my photos sorted in album-folders, I have one smart folder that references all the photos so that I can how large my overall collection is and to sort them by name or time.
Similarly it is super easy to create a smart folder with all the photos taken by a single camera.

<img srcset="/pictures/2020-08-sort-photos/finder-screenshot.png 2x" alt="folder hierarchy Mac Finder" class="center-image" style="padding-top: 20px; padding-bottom: 20px">

I also use coloured tags to assign albums to a specific category such as *personal*, *family*, *friends* but that is a topic for another blog post.
With all those photos now living on the computer (or external harddrive) it is crucial to make regular backups, as any electronic device can fail at any moment!
Personally I use Apple's Time Machine to have versionned backups, but there are many other solutions on the market.
Photos are something highly personal that should reflect the memories of the photographer; there is no use in hoarding pictures that other people have taken as they show a different perspective on events that might not recreate the same memories.
Beware of duplicates, especially when curating a selection of pictures to share or print, these photos are already save in another folder which should be made explicit by adding `(duplicates)` to the selection folder's name for example.

Only time will tell if this system will hold up, but after much back-and-forth I am quite happy with the current state of my 45k-strong photo library. 🤞

Thanks for reading, let me know in the comment how you organize your personal photos!
