# Bypassing Worldlink's NETTV Setup box restriction to install 3rd party android apps
![Setupbox](/setupbox.jpg)

This works on NETTV White Setup box. Dunno about other models.

# Things you will need
* A Redmi Phone with IR Blaster ( This is very important and is one of the most crucial part of this method, without this I don't think it is possible)
* PC with ADB setup ( Google to learn how to setup adb on Windows or any OS )
* NETTV Setup Box ( Ofcourse )

# Procedure
First let's explain what we are going to do. We are going to use the IR Blaster of the Redmi Phone to control the NETTV Setup Box. With the Mi Remote app that is built in on the phone we are going to use it to open system settings on NETTV. Once we open the system settings , we will enable the Developer Option and enable USB Debugging mode, then use it to install 3rd party apps on the Setup Box.

* Inorder for the Mi Remote to get the right keymap, we need to set the phone's region to India. To do that, simply go to Settings of the phone and navigate to Additional Settings and there should be an option to let you change the region. Set it to India. 
* Once it's done, clear the date of Mi Remote App if it's already installed, if it's not installed on your phone then download it from the play store.
* Now open the Mi Remote App and select Setup Box, inside there you should see tons of company names. 

![MiRemote1](/miremote1.png)

* Look for **Home Digital** and select it
* A new menu will come up with virtual power button. Point your phone towards NETTV Setup Box and press the button. That should open the system settings on your TV Box.

![MiRemote2](/miremote2.png)

# Using ADB via Network
Once system settings is opened , enable Developer Option and enable USB Debugging.

![SystemSettings](/systemsettings.jpg)

Make sure your device and NETTV is connected in the same network. Find out your NETTV's IP Addresss ( you can look it up on NETTV's Settings app on Ethernet option ).

Once you you get the IP address, get your ADB installed PC ready and open cmd or Terminal, and enter ``adb connect [NETTV's IP Address]:[5555]``
For example : **adb connect 192.168.134:5555**

![ADB1](/adbcmd.jpg)

After you hit Enter, you should see a prompt on your NETTV's TV Screen. Tick on Always Allow and and click on Ok.
![ADBPrompt](/adbpromt.jpg)

Now you have connected to the adb of the NETTV. You can simply download apk on your PC and do ``adb install example.apk``. That will install the apk on your STB. I recommend installing ATV Launcher app via adb and then press Home button on the NETTV Remote, that will give you an prompt to choose which Launcher you want to use, simply choose ATV Launcher.Thus, ATV Launcher will let you access the installed apps. 
Here's a screenshot of my ATV Launcher setup which I took some time to customise :

![ATV](/atv.png)

# There is also a easier method to install apps using ES File Explorer
* Install ES File Explorer on your Phone ( Note : it's not available on Google Play Store. You can download it from [here](https://es-file-explorer.en.uptodown.com/android) )
* Open it and on left swipe menu bar inside the Network section , you should see Android TV option. Click on it and wait for it to detect your TV Box ( Note : Your Phone and TV Box must be on same network )
* You should see a IP Folder type appear, click on it and it should prompt same Adb Dialoge box on your TV Box, allow it.
* This will install ES File Explorer on your NETTV Setup Box and it will launc itself
* Using it you can connect a flash drive full of apks you want to install and use ES File Explorer to install them

# What's my current NETTV Setup ?

Currently , I don't use ATV Launcher. As it was getting difficult for my family members to navigate to the Live TV. And since NETTV's default Launcher is so well integrated with Live TV and auto launch on startup. I decided to set it as default. BUT , the big problem was, how am I going to access the installed apps list. So, while I was thinking about this, I found a opensource project on Github https://github.com/sds100/KeyMapper, it's an android app that let's you edit the default remote key maps and set your own. So an idea came to my mind. 
* Firstly I installed an app called Sideload Launcher for Android TV, this app lets you list installed apk without acting as an home launcher. 
* Then I installed Key Mapper app and set an key for launching Sideload Launcher from my NETTV's Remote
* Then I unistalled ATV Launcher 

And that's it. Whenever I want to access the 3rd party installed apps, I simply press that key on my NETTV Remote ( the one you set to open certain app from Key Mapper app) and it simply launches Sideload Launcher. This will let me access all my apps while still retaining NETTV's Live TV and default Launcher + no performance loss.

![SideLoad](/sideload.png)

# Cool Apps to sideload on your NETTV Setup Box

* **If you are an Anime fan, then you should definitely install this app called FireAnime.** https://github.com/XenTeckzX/FireAnime

![FireAnime](/fireanime.png)

* **SmartTubeNext ( A similar app like Youtube Vanced but designed only for Android TVs )** https://github.com/yuliskov/SmartTubeNext

![STubeNEXT](/stube.png)

* **Kodi (If you know it's capability and how to use it, it is definitely a best way to enjoy media content on your TV Box.)** https://kodi.tv/download

![Kodi](/kodi.png)

* **Streamio ( One of the best Torrent Streamer out there. You can also use PopCorn time )** https://www.stremio.com/downloads

![Streamio](/streamio.png)

* **Aptoide ( Probbaly the best way to quickly download and install 3rd party Android Apps )** https://tv.aptoide.com/

![Aptoide](/aptoide.png)

 * ES File Explorer
 * Link2SD ( For freezing NETTV Junk apps since they install automatically if you unistalled them )
 * RetroArch ( To play classic NES or PS games on your TV Box if you got game controllers )
 * Send Files To TV ( Yes, it's an app name )
 

