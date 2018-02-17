# Hwinfo Monitoring
The Hwinfo application allows you to set up alerts and trigger a program to run.

This includes a NodeJS script and a sample batch file which can be run to trigger IFFT notifications.

## Setup

### Requirements
- Computer connected to the internet running NodeJS LTS 8.X
- A smart phone

### IFFT
1. Go to https://ifttt.com/maker_webhooks
2. Sign up for the Webhooks service
3. Add an applet that uses the Webhooks service
4. Install the IFFT mobile app on your smart phone
5. Go to the ```Documentation``` section of the Webhooks service and do a test run

### NodeJS

1. Install NodeJS dependencies
```
cd hwinfo-monitoring
npm install
```
2. Enter the IFFT configuration from the previous step in ```config/default.json```
3. Update the batch file ```sample.bat``` with your own paths

## Hwinfo
1. Install/Run Hwinfo
2. Go to the ```Alerts``` tab and select the sensor you are interested in
3. Under ```Run a program```, select the batch file from the previous step 
4. Under ```arguments``` enter ```"%s" "%v"```