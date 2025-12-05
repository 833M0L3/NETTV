# Bypass Method 3  <Badge type="danger" text="Hard" />

::: tip
This methods works with any firmware version. If you have box with firmware version ``20809`` ``020409``, follow the PIN out headers as shown [here](./method3.html#for-another-variant-p291)
:::

## Things you will need
* [UART to USB Converter](https://s.daraz.com.np/s.d0qy)
* NETTV Box
* Screw Driver
* PC

::: warning
If you don't know what is UART and how it works, watch this video first.   
:::

[![Youtube Link](http://img.youtube.com/vi/01mw0oTHwxg/0.jpg)](http://www.youtube.com/watch?v=01mw0oTHwxg "UART Explained")

## Procedure

Now once you know how it works. Open your NETTV setup box. Look for that UART Pin out and connect it to the right pin.

Since I have done it myself and figured out which PIN is for what, I have this image labeled below that will help you.

![UART1](/assets/uart1.jpg)

Once you connect the right PIN, power on the box while connecting it to the converter that is connected to the PC, and use the right baud rate for the communication. I think used 115200, but I might be wrong. If it starts throwing gibberish try 9600.

![UART2](/assets/uart2.jpg)

I used Putty on Windows for the serial connection. You can use whatever tool you like. Once you get everything right you should get a booting info throw in the screen that is similar to Linux. Once it completes booting, you have the shell access. It's that easy.

You can go full root using su and start modifying things you would like to change. The first thing I did was install a different launcher and that's all. Since it's an adb shell, you can directly install apps using adb commands. To access the downloaded apks, you can keep them on a flash drive and connect it to the box, and navigate to the drive directory which is usually inside ```cd /storage/```

![UART3](/assets/uart3.jpg)

And that's all. With a different launcher, you can install other 3rd party apps. Once a 3rd party launcher is installed, press home button on the remote, and it should pop up an option to choose a default launcher. 

![UART3](/assets/uart5.jpg)

## For another variant (P291)

This is for the new NETTV whitebox variant that looks similar to the older one but has different specs and board. This new box has Amlogic S905L chipset with bluetooth connectivity. Along with that it comes with Android 9 and has weird striped down native Android settings available. The settings won't let you turn on developers option.

Below is an image of the board with labeled UART.

![UART3](/assets/p291_board.jpg)
![UART3](/assets/p291_board2.jpg)
::: tip
Unlike other variant where you can just open settings and enable developer option, this box has developer option disabled from the native settings app. To enable developer option and gain wireless adb, you will have to install a 3rd party app [Developer Option](https://raw.githubusercontent.com/833M0L3/NETTV/refs/heads/main/apks/dev_option.apk).

![UART3](/assets/p291_developer.jpg)
:::