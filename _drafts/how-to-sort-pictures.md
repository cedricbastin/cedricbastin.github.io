---
layout: post
title:  "How to sort personal pictures"
date:   2020-03-12
categories: technology
tags: technology, tools, standards
comments: true
---

# How to sort personal photos

<!-- HISTORY AND BACKGROUND -->
Digital Cameras have been around for many decades now,
but how do you keep those pictures organized for the next decades come?
Digital photos have the disadvantage that you don't just stumble over them in a box on the attic, however they are also much more convenient to store huge amount of them.
Thus we take a lot more pictures than we used to,
so organizing them becomes key to having a photo collection that stays enjoyable as it grows. I won't be talking about professional tools such as Lightroom,
as this article is about personal pictures that should survive many decades without being locked in a media library that might not be supported in the future anymore because it got super-seeded by another program or because the company the create it no longer exists.

<!-- APPLE PHOTOS & GOOGLE PHOTOS -->
As we take most of our personal pictures on our smartphones, it is easiest to use the tools that come with it, namely Apple Photos (for iPhone/iOS) and Google Photos (Android & iOS).
These tools provide great discoverability as they allow you to tag people, search for object and events and even show your pictures on a map.

![apple-photos](/pictures/2020-08-sort-photos/apple-photos.png){: .center-image}

This tools offer a great solution for your pictures of the last few years.
For instance do I leave all of my iPhone pictures synced to iCloud, but I do not add my older pictures to these services.
For instance you have to pay per month to use these services, Google advertised unlimited storage but will downscale the resolution.
The main issue is that you don't know for how many years these services will be operating.
I went through the painful transition from **Google Picasa** to **Apple iPhoto** before landing on **Apple Photos**.
Each time spending way too much time tagging people in pictures and creating properly named albums for events.
But more recently I stopped doing that as I will only be using these services for what they are without trying to use them to manage all of my older pictures.

![google-photos](/pictures/2020-08-sort-photos/google-photos.png){: .center-image}

It is great to know that the photos from my different devices are backed up in the cloud but from time to time it seems like a good idea to copy them onto your local computer as well.

<!-- FILES AND FOLDERS -->
If you are storing pictures for a long time you probably want to rely on a basic and well established system namly files & folder on your computer. They are easy to transfer to friends or family and it is also easier to create backups onto an external harddrive. The major disadvantage is that a pictures cannot be in multiple albums like *nature*, *friends* and *hiking*.
So we have to come up with a universal structure and I choose to go chronological rather than theme based (*parties*, *holidays*, *at home*...).
Quite often there are some loose single shots that don't really belong to any event but I also don't feel like creating a single folder just for them, so I'm adding them to the same album as the previous event.

<!-- FOLDERS ARE ALBUMS -->
As most photos are related to an event at a specific date and time you should group together chunks of ~30 pictures into folders that have a very descriptive name as this will be the only way of easily searching them using your computer's search functionality. Computers are also really dumb when it comes to sorting as they can only sort items in an alphabetical way (sorting by time of creation doesn't make sense for folders). You should only use the the [Asian](https://en.wikipedia.org/wiki/Date_and_time_notation_in_Asia#Date) date notation in it's 0-padded version `YYYY-MM-DD` to prefix your album (folder) names. This will make it very straightforward to get a nice chronological view of all your albums.

<!-- CHUNKS OF 5 YEARS -->

Of course you don't want to have an endless list of albums that you have to scroll through.
So I created a nested structure to group together a bunch of albums that are related.
I used to have category-folders such as *family*, *friends*, *school* but it quickly got messy as some events are shared between more categories such that I didn't know where to put them, or where to find them afterwards. So I went back to the idea of chronological sorting and defined **'contexts'** which are chunks of ~5 years that have a clearly defined timespan without overlapping with another.
For instance *Highschool*, *University*, *Job 1*, *Job 2* etc. This doesn't mean that anything which is in the *University* super-folder actually took place at university but rather they are from this *time period* when I was at university, even if the pictures are actually from a holiday or from my parents home.

![album-context](/pictures/2020-08-sort-photos/album-context.png){: .center-image .retina}

<!-- FAVORITES AND PRINTS -->
We take a lot of digital photos and more often then not we take multiple pictures of the same subject just to be sure to get at least one good one.
Thus the value of each individual pictures is also reduced until the curation step has happened to reduce the number of photos to a select few.
Thus I would recommend to create a sub-folder for each album either named `selection` or `rejected` which helps keep the good shots separated from the less favorable ones.
Another recurring issue is that you might want to print out some pictures or even create a photo-book with the best shots.
In order to keep track of those I use `colors`/`tags` in Mac's Finder.
This is for sure a less permanent solution as these will not be transferred if I would open this folder on Windows,
but I believe they fulfill their purpose well enough for the time being.

![album-names](/pictures/2020-08-sort-photos/album-names.png){: .center-image .retina}

<!-- METADATA AND SMART FOLDERS -->

A lot of hidden value of pictures actually come from their metadata, date&time, geo-location tag, device&lens information etc.
This information might not be relevant by itself but you can use it to surface relevant information using *Smart Folder* on Mac's Finder of *Apple Photos* (I'm not sure what a similar feature on Windows would be called.)
They help to get around the limitation that a file can only be in a single folder.

![smart-album](/pictures/2020-08-sort-photos/smart-album.png){: .center-image .retina}

For instance, even though I have all my pictures sorted in album-folders, I have one smart folder that references all the photos such that I can sort them by name or time.
Similarly it is super easy to create a smart folders with all the pictures from a single device.

Only time will tell of well this system will hold up, but after much back and forth I am quite happy with the current state of my 45k pictures strong library. 🤞

Thanks for reading

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
