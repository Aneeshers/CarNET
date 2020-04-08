---


---
# Welcome to CarNET
*A machine learning tool to help organizations and law enforcement collaborate to track malicious vehicles from only the make and model of the vehicle*

![](https://github.com/Aneeshers/CarNET/blob/master/CarNEt.png)
## The Problem
Often times, when someone reports a malicious activity (such as a suspicious car) they don't have enough time to take a high quality picture of the license plate. However, many can remember what type of car they saw, but it's very cumbersome and tedious for law enforcement to search through hours of surveillance video to even get a lead on the vehicle based on only this information. 

# CarNET helps facilitate the searching task

 - [ ] Allows organizations in the community to subscribe to CarNET and request data from each other
 - [ ] will take an input of model and make (such as BMW sedan, or even as specific as Nissan 240SX Coupe 1998)
 - [ ] Send request to other companies and other nearby geolocations with CarNET to use their survelience data to search for the car
 - [ ] Apply a ResNET-50 transfer learning model to identify cars in the data, and highlight frames that match the information that was queired


# How we built it
We used **Electron** for a modern and contemporary GUI to interact with users and **Firebase**.
For our dataset we used: https://ai.stanford.edu/~jkrause/cars/car_dataset.html
The dataset contains 16,185 images of **196 classes of cars**.  Classes are at the level of _Make, Model, Year_, e.g. 2012 Tesla Model S or 2012 BMW M3 coupe.
We used **Pytorch**, **ResNET-121**, transfer learning and **Google Collab** to train our model on a cloud GPU
## CarNET Model

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtEZW5zZU5FVC0xMjFdIC0tPnx0cmFpbiBjdXN0b20gZ2F1c3NpYW4gbWl4dHVyZSBtb2RlbHwgQihPbmUgQ2xhc3MgQ2xhc3NpZmNhdGlvbilcblx0QiAtLT5De09uZS1DbGFzc31cbiAgQyAtLT4gQ3tSZXNOZXQtNTB9XG5cdEMgLS0-fFRyYWluIG9uIFN0YW5kZm9yZCBBSSBDYXIgRGF0YXwgRFtDYXJORVR2MV1cblxuXHRcdFx0XHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtEZW5zZU5FVC0xMjFdIC0tPnx0cmFpbiBjdXN0b20gZ2F1c3NpYW4gbWl4dHVyZSBtb2RlbHwgQihPbmUgQ2xhc3MgQ2xhc3NpZmNhdGlvbilcblx0QiAtLT5De09uZS1DbGFzc31cbiAgQyAtLT4gQ3tSZXNOZXQtNTB9XG5cdEMgLS0-fFRyYWluIG9uIFN0YW5kZm9yZCBBSSBDYXIgRGF0YXwgRFtDYXJORVR2MV1cblxuXHRcdFx0XHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

# Challenges
We ran into many challenges, with the data science aspect, we had a lot of challenges being able to train the model on different frameworks on the cloud and being able to build it on a CPU.
As fo our GUI, we tried Electron for the first time, so we had challenges learning the library. We also had a little trouble with the Firebase AUTH

# Accomplishments we are proud of

 - We successfully trained a highly accurate model, this was one of our biggest concerns, and we were very happy when it was successfully transferable to a local CPU
 - We managed to integrate GeoLocation, Video files, Python Scipts, and Firebase all in Electron! It was a very hard task but we did it!
 - We were able to apply the program on real data
 
# What we learned
 - We learned how serious human trafficking is, and how much we all have a desire to help communities with CarNET
 - We learned how to fully take advantage of Electron
 - We learned how to train models on the cloud (for free too!)
 
 # What's Next for CarNET?
 
 - Time stamp reporting
 - Real-time car detection
 - Color detection for cars
 - Better UI

<h1 id="carnet">CarNET</h1>
<p>ResNET-neural-network trained to detect car model (i.e BMW X# SUV 2012)</p>
<h1 id="requirements-pip">Requirements (pip)</h1>
<ul>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> torch</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> torchvision</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> PIL</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> matplotlib</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> numpy</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> json</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> cv2</li>
</ul>
<h2 id="download-model-and-car_datatrain">Download model and Car_Data/Train</h2>
<p>Go to the read mes in both folders and download it.</p>
<h2 id="run">Run</h2>
<pre><code>cd CarsNET
python CarsNET.py Coupe (supports Sedan, SUV, Coupe, Convertible, Cab, Van, Wagon, Hatchback, Minivan)
</code></pre>

# HumanTraf


### Prerequisites

```
NodeJS
```

### Installing

Clone/Download repository

CD to the folder where your downloaded your cloned repository (it will be different for everyone for me its there)

```
cd /WebstormProjects/HumanTrafElectron
```

Next run these commands in this specific order ONE BY ONE wait for each one to install before doing the next one

```
npm install
npm install --save electron
npm install --save firebase
npm install --save firebase-admin
npm install --save python-shell
npm install mapbox-gl --save

```


### Running the Program

CD to the folder where you downloading everything
```
cd /WebstormProjects/HumanTrafElectron

```

Then run npm start

```
npm start

```

