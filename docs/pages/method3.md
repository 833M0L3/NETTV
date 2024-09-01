# Bypass Method 3  <Badge type="danger" text="Hard" />

::: tip
This methods works with any firmware version   
:::

## Things you will need
* [UART to USB Converter](https://www.daraz.com.np/products/ttl-usb-converter-usb-stc-isp-usb-to-serial-5-pin-serial-adapter-module-33v5v-power-i105763539-s1027613590.html?spm=a2a0e.searchlist.list.38.496cbc6dju4XgJ&search=1)
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

You can go full root using su and start modifying things you would like to change. The first thing I did was install a different launcher and that's all. Since it's an adb shell, you can directly install apps using adb commands.

![UART3](/assets/uart3.jpg)

And that's all. With a different launcher, you can install other 3rd party apps. Once a 3rd party launcher is installed press home in the remote, and it should pop up an option to choose a default launcher. 