---
layout: post
title:  "How to sort personal photos"
date:   2020-03-12
categories: technology
tags: technology, tools, standards
comments: true
---

<!-- HISTORY AND BACKGROUND -->
Digital Cameras have been around for many decades,
but how do you keep those photos organized for the next years to come?
Digital photos come with the disadvantage that you don't stumble upon them in a box in the attic,
but they are however much more convenient to store,
especially in large numbers.
Thus people take a lot more photos than before,
so organizing them becomes key to having a collection that stays enjoyable as it grows.
I won't be talking about professional tools such as Lightroom, as these media libraries might become obsolete in the future.
A personal photo collection should be stable and survive without relying on proprietary software. 

<!-- APPLE PHOTOS & GOOGLE PHOTOS -->
As we take most of our personal photos using smartphones,
it is the easiest to use the tools that come with them,
namely Apple Photos (iPhone/iOS) and Google Photos (Android & iOS).
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
For instance I sync all of my iPhone photos to iCloud, but I do not upload my older photos. These services also require a paid subscription, or come with other disadvantages, such as downscaling the resolution in the case of Google's unlimited storage.
Still, the main issue is that it is uncertain how long these services will be operating for.
I went through the painful transition from *Google Picasa* to *Apple iPhoto* before landing on *Apple Photos*.
With each transition I spent too much time tagging people in photos and creating albums.
More recently, I stopped forcing my own vision onto these tools and I only use them for what they are capable of, without trying to manage all of my older photos through them.

It is great to know that photos from different devices are backed up in the cloud but from time to time it seems like a good idea to copy them onto a local computer as well.

<!-- FILES AND FOLDERS -->
Storing photos for a longer time benefits from having a basic and well established system to do so; namely files & folders on a local computer.This facilitates sharing and transferring photos to friends and family, as well as creating  backups onto an external hard-drive.
The major disadvantage is that photos cannot be in multiple albums at once, like *nature*, *friends* and *hiking*.
The universal structure for storing has to be intuitive and easily browsable, so I chose the chronological order rather than a theme-based solution (*parties*, *holidays*, *at home*...).

<!-- FOLDERS ARE ALBUMS -->
As most photos are related to an event at a specific date and time, larger chunks of photos should be grouped together into folders that have a very descriptive name.
This is the only way of searching for a specific photo, while relying on the file browser's search functionality (e.g. John hike).
The computer cannot sort folders chronologically when the date is provided in a human preferred format such as `March 12 2011 hiking with Jane in Scotland`. 
A date and time in the [Asian](https://en.wikipedia.org/wiki/Date_and_time_notation_in_Asia#Date) notation in it's 0-padded version `YYYY-MM-DD` should be used to prefix the album (folder) names.
This will make it very straightforward to get a nice chronological view of all albums.
This will not work if the European `DD-MM-YYYY` or American `MM-DD-YYYY` format is used.

Sometimes there are are loose single shots that don't really belong to any event but it's also not useful to create a separate folder just for them, so adding them to the previous event can be a reasonable solution.

<!-- CHUNKS OF 5 YEARS -->

This method will likely create an endless list of albums to scroll through, which is not desirable.
So I created a nested structure to group together several chronologically related albums.
I used to have category-folders such as *family*, *friends* and *school*, but since some events are shared between more categories I was unsure where to place them, or where to find them afterwards.
Going back to the idea of chronological sorting, I defined *'contexts'* which are chunks of ~5 years that have a clearly defined timespan without overlapping with one another.
For instance *Highschool*, *University*, *Job 1*, *Job 2* etc.This doesn't mean that all photos in the *University* super-folder are actually university-related. 
It only means that they are from this *time period*, even if the photos are actually from from my parents' home or a holiday.

![album-context](/pictures/2020-08-sort-photos/album-context.png){: .center-image .retina}

<!-- FAVORITES AND PRINTS -->
We take a lot of digital photos, often even multiple photos of the same subject just to be sure there is at least one good shot.
Thus the value of each individual photo is also reduced until the album is curated down to a small selection.
What I am doing to fix this is creating sub-folders for each album either named `selection` or `rejected` which help separating the good shots from the less favorable ones.
Another recurring issue is how to mark the best shots for creating a photo-book or printing out some photos. 
In order to keep track of those I use `tags` in Mac's Finder.
This is of course a less permanent solution as these tags will not be transferred if I migrate folders to Windows,
but I believe they fulfill their purpose well enough for the time being.

![album-names](/pictures/2020-08-sort-photos/album-names.png){: .center-image .retina}

<!-- METADATA AND SMART FOLDERS -->

A lot of hidden value of photos actually come from their metadata which includes date&time, geo-location tag, device&lens information etc.
This data can be used to surface relevant photos using *Smart Folder* on Mac's Finder or in *Apple Photos*.
They help to get around the limitation that a file can only be in a single folder.

![smart-album](/pictures/2020-08-sort-photos/smart-album.png){: .center-image .retina}

For instance, even though I have all my photos sorted in album-folders, I have one smart folder that references all the photos such that I can sort them by name or time.
Similarly it is super easy to create a smart folder with all the photos taken by a single camera.

Only time will tell if this system will hold up, but after much back and forth I am quite happy with the current state of my 45k photos strong library. 🤞

Thanks for reading!

<!--
- DIGITAL HYGIENE
I have recently started to clean up my digital life, in order to maintain the so-called "digital hygiene". From using a password manager, maintaining an empty email inbox, tracking important events in my calendar and what's important for this article sorting personal pictures. Sometimes I think about what digital information is most important to me, I would mind loosing my university or work documents much less than loosing access to my personal pictures for instance. Of course backups are one thing that everyone should do, but you pictures should also be organized in such a way that it is easy browse. This post is written from the perspective of a Mac user, as I'm not sure about all the Application names on Windows, but I'm sure it is not that different.

- HISTORY: DIGITAL CAMERA
Many of us were excited when digital photography became affordable for families and amateurs in the early 2000s. Photos became instantly viewable on the computer and where easy to duplicate to pass them on to friends on family on a USB stick. Then came smartphones and social media in the 2010s which made it even easier to view, share and combine photos of important life events. However since then more people have tried to move away from huge online information agglomerates such as facebook to bring such personal things as photos back into our control. The question we are left with now is how to organize the pictures in such a way that that we can easily find back a picture or memory that we are looking for.

- NOT PROFESSIONAL PHOTOS
I will not be talking about how to organize photos from a professional context. I do not know if professional photographers prefer to group their photos by project, by client or by camera. This post is only about how to organize your personal photo memories in well defined chunks that are easy to browse even in a few years when your collection grows considerably. As I understand it Adobe Lightroom is used by many to annotate photos using tags and additional tools such as star ratings and favorites which make it easy to filter through large collections of similar pictures from the same photoshoot. Even though some of these principles might apply to smaller, personal photo libraries such as 'favorites' we will talk about those later.

- USING THE TOOLS THAT ARE AVAILABLE TO YOU RIGHT NOW
As smartphones cameras get better every year, with high-end devices having surpassed the photo quality of basic compact models, they become our de-facto point-and-shoot devices for everyday moments. As most modern smartphones are either running Android or iOS we also get to use their respective photo management software, namely Google Photos and Apple Photos. The Apps live on our phones, on our computers and even on the internet. They allow you favorite, share and even edit photos. Though they are mainly photo libraries which allow you to easily navigate and  find photos. As photos have a lot of metadata attached to them (date, location, camera, lenses...) thus you can easily search for a photos in a specific date range or even location. Additionally all these modern software has enough smarts build in that you can search for "cat", "wedding" or even "food". No amount of manual work can make up for that!

- CLOUD STORAGE
Most of us end up taking most of our personal photos with our smartphones, such that in the end the photos will be synced to the Apple iCloud Photo Library or to Google Photos. These Tools are great because they have many advantages build it. Right now my iCloud Photo library has almost 30'000 pictures in my iCloud libraries which takes up 90GB of my iCloud storage but only 1.5GB on my iPhone. This is due the 'Optimize iPhone Storage' option which offloads most of the pictures that I don't look at often enough to the Cloud. A very similar story is true for Android and Google Photos, except that you get unlimited free cloud storage for your photos, except that photos will be resized to a maximum of 16MP and videos are resized to 1080px. So I do prefer paying for iCloud storage knowing that my photos will always be full quality.

- WAIT FOR THE TOOLS TO BE GOOD ENOUGH
Tools will only get better and they are indeed getting better very fast with more advanced technology such as machine learning and face recognition. so don't spend too much time on a task that in the future is most likely to get automated. When I tried using Picasa as my photo management software I spent huge amounts of time to annotate people face's with their corresponding names. Then I stopped using Picasa and lost all of that work, however nowadays it would also be a redundant job as face recognition software is much better than it used to be.

- DON'T TRUST MEDIA DATABASES
However even though I praised modern photo library management tools earlier for their ease of use, you shouldn't trust them too much. I used Picasa for while but then switched to iPhoto as it integrated more easily with iPhone. So quite often the camera you use limits the options of software that work well with it. Also when Google discontinued Picasa in 2016 and launched Google Photos, they did provide an easy migration tool to bring all your well organized photos to their shiny new service. https://www.digitaltrends.com/photography/how-to-transfer-photos-from-picasa-to-google-photos/ Similarly Apple switched from iPhoto to Apple Photos in 2015, even though they had a migration path many things could go wrong which could either end up you loosing pictures, duplicating them, or revealing a bunch of random thumbnails that were used internally to represent people's faces and such. (which is what happened to a friend of mine)
In general the issue with these Apps is that they hide their internal database structure such that it gets really hard to get pictures out of these services and how to interoperate with 

- CLEAN UP APPLE PHOTOS
So the first step in cleanup up your photos is to figure out what you have where. Because I 

- DON'T DUPLICATE WORK
deleting pictures, sorting pictures, creating events

- DON'T CARE ABOUT OTHER PEOPLE PICTURES
Pictures are supposed to freeze a moment an bring back memories more easily, but more often than not they become the memories if we forgot about an event or moment, pictures are 

- THE PROBLEM WITH THE FOLDER STRUCTURE
add tags or paranthesized info 

- METADATA IS KING
make sure the time and date is correct, only shoot with GPS enables cameras

- 5 Ws: Who, What, When, Where, Why

- CHRONOLOGICAL IS MASTER
The basic idea is save all the photos you have in Finder (or Explorer), as they won't get messed up by some library manager and they will be included as such in your backup (e.g. Time Machine)

- BEWARE OF DUPLICATES

-->
