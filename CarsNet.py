import torch
import torchvision
from PIL import Image
import os
import matplotlib.pyplot as plt
import numpy as np
import torch
from torch import nn
from torch import optim
import torch.nn.functional as F
from torchvision import datasets, transforms, models
import torchvision.models as models
from PIL import Image
import json
from matplotlib.ticker import FormatStrFormatter
import os
import cv2

model = models.resnet34(pretrained=True)
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, 196)
type = 'Coupe'
criterion = nn.CrossEntropyLoss()
optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9)
lrscheduler = optim.lr_scheduler.ReduceLROnPlateau(optimizer, mode='max', patience=3, threshold = 0.9)
def load_checkpoint(filepath):
    checkpoint = torch.load(filepath, map_location=torch.device('cpu'))

    # model.load_state_dict(checkpoint['state_dict'])
    model.load_state_dict(checkpoint['state_dict'], strict=False)
    model.class_to_idx = checkpoint['class_to_idx']

    return model


model = load_checkpoint('my_checkpoint1.pth')
model = torch.nn.DataParallel(model)


def process_image(image):
    # Process a PIL image for use in a PyTorch model

    # Converting image to PIL image using image file path
    pil_im = Image.open(image, mode='r').convert('RGB')

    # Building image transform
    transform = transforms.Compose([transforms.Resize((244, 244)),
                                    # transforms.CenterCrop(224),
                                    transforms.ToTensor(),
                                    transforms.Normalize([0.485, 0.456, 0.406],
                                                         [0.229, 0.224, 0.225])])

    # Transforming image for use with network
    pil_tfd = transform(pil_im)

    # Converting to Numpy array
    array_im_tfd = np.array(pil_tfd)

    return array_im_tfd


def predict(image_path, model, topk=5):
    # Implement the code to predict the class from an image file

    # Loading model - using .cpu() for working with CPUs
    loaded_model = load_checkpoint(model).cpu()
    # Pre-processing image
    img = process_image(image_path)
    # Converting to torch tensor from Numpy array
    img_tensor = torch.from_numpy(img).type(torch.FloatTensor)
    # Adding dimension to image to comply with (B x C x W x H) input of model
    img_add_dim = img_tensor.unsqueeze_(0)

    # Setting model to evaluation mode and turning off gradients
    loaded_model.eval()
    with torch.no_grad():
        # Running image through network
        output = loaded_model.forward(img_add_dim)

    # conf, predicted = torch.max(output.data, 1)
    probs_top = output.topk(topk)[0]
    predicted_top = output.topk(topk)[1]

    # Converting probabilities and outputs to lists
    conf = np.array(probs_top)[0]
    predicted = np.array(predicted_top)[0]

    # return probs_top_list, index_top_list
    return conf, predicted
def most_frequent(List): 
    return max(set(List), key = List.count) 
def find_classes(dir):
    classes = os.listdir(dir)
    classes.sort()
    class_to_idx = {classes[i]: i for i in range(len(classes))}
    return classes, class_to_idx
classes, c_to_idx = find_classes("car_data/train")
model_path = 'my_checkpoint1.pth'
classes_detect = []
count = 0
for d in [d for d in os.listdir("Video/")]:
    count= count + 1
    img_path = "Video/" + d
    
    if (img_path != 'Video/.DS_Store'):
        if (count < 20):
            conf1, predicted1 = predict(img_path, model_path, topk=5)
            classes_detect.append(predicted1[0])         
    print(img_path)
    print(count)
    print(classes[(most_frequent(classes_detect))])
    

#Sedan
#SUV
#Coupe
#Convertible
#Cab
#Van
#Wagon
#Hatchback
#Minivan

predicted_car = classes[(most_frequent(classes_detect))]
if (type in predicted_car):
    print('Found type: ' + type + '   ')
    print(predicted_car)
else:
    print('Did not find a ' + type + ', but found ' + ' ' + predicted_car)
