# NodeMCU-Pi-Garage-Control
This will control all the lights

## Hardware Requirements
1. Raspberry Pi - any version will work since this will just host the web server 
2. ESPHome set up (Hassio set up will work) 
3. NodeMCU Board (can use any ESP8266 module including D1 Mini)
4. 5v Relay Module
5. DHT11 sensor - for Temperature & Humidity
6. Jumper cables
7. Box for your stuff

## Software Requirements
1. ESPHome - perhaps through Hassio
2. Apache for the web server

## Wiring Diagram:

The following diagram is for connecting your NodeMCU to your relay and DHT11 sensor:

<img src="./img/garageDoorLayout.jpg" alt="Garage Door Layout Fritz">

#### Connections explained

| Color |  Pin | Connects to |
|-------|:---------:|---------|
| Red (relay)   |    VU    |  VIN on Relay |
| Black (relay)|    Any Ground Pin     | GND on Relay |
| Green  |    D1     | Data pin on Relay |
| Blue   |    Normally Open and Common pins on relay | To garage door controller |
| Red (DHT) | any 3v Pin On NodeMCU | Power on DHT Module| 
| Black (DHT) | Any Ground Pin on NodeMCU | GND on DHT Module| 
| Yellow | D2 | Data Pin on DHT |

The blue wires represent the connections going into the Garage Door control. As you'll see in my demo, The door triggers (open/close/stop) when the two left-most terminals
are connected in any way. When you put the two wires on the normally open connection on  your Relay module, they are not connected. When the connect closes, the door controller
then knows to do something.  


## Demo
Check out the demo on YouTube at the following link: [https://www.youtube.com/watch?v=ddv5vsHgYhI](https://www.youtube.com/watch?v=ddv5vsHgYhI)

### Author
Nazmus Nasir - [Easy Programming](https://www.easyprogramming.net)

## Notes
There's no way to tell if the door is open or closed. This is on my to-do list.

## Questions?
If you have questions, there are many ways to get in touch with me! 

1. Ask in the comments section of the YouTube video, I am generally very good at responding to questions. 
2. Ask in the comments section of EasyProgramming.net. Every tutorial comes with a Disqus section to allow a meaninful discussion
3. If a repository exists on Github, open an issue! 
4. This should be used as a last resort because I check this email every once in a while and don't guarantee a response, but if you must, you can use the contact form found here: https://www.easyprogramming.net/contact.php
