<h1> Mini_ex 8 - Coding challenge and a flow chart </h1>

![ScreenShot](https://github.com/Emmapilk/Aestetisk-programmering-2017/blob/master/Miniex8/Miniex8.png)

<b> Run: </b> https://cdn.rawgit.com/Emmapilk/Aestetisk-programmering-2017/e5234015/Miniex8/empty-example/index.html

<b> link to flowchart: </b> http://laioz2.axshare.com/#g=1&p=home

<b> What is your selected coding challenge?</b>
Coding Challenge #60: Butterfly Generator: https://www.youtube.com/watch?v=O_0fRV4MTZo
This coding challenge shows you how to create an animated shape in the form of a randomly generated buttefly/moth.

<b>What function/syntax have you added?</b>
I have added the functionality of multiple butterflies being drawn, with random positioning and random gradient fill colouring, so that the butterflies look different in shape, positioning and colouring each time the page is loaded.
The gradient filling was achieved by drawing a smaller butterfly of one colour inside a bigger butterfly of another colour and setting the stroke colour of the inner butterfly to a colour that is a transition between the two colours.
I have added an extra function called "butterfly" to keep the code well organised and allow a programmer to pass different position and colour values, this function can be called multiple times in the same draw loop.
For the background of this sketch I chose a subtle blue off white colour, to allow the butterflies to stand out whilst providing the asthetic of them flying in the air.

<b>What is the difficulty of this week mini exercise?</b>
Given that there were 98 coding challenges to choose from, it took some time settling on a coding challenge that wouldn't be too complex to create a flow chart of, as well as some not lending themselves to be extended upon easily.
The coding challenge I decided to develop upon stood out to me as I immediately thought of possible functional extensions that I could try to create.
However, I found it hard to produce a flow chart of this programme as it was almost too simple to illustrate through a flow chart, as there is no user interaction and the programme flow is all through initialisation with minor animation achieved through mathematical calculations.
I initially had issues drawing multiple butterflies by trying to change the position of each butterfly using the translate function, this turned out to be due to the rotation function being called before the translation function, when it in fact had to follow the translation.

<b>How may we see, organize and communicate things differently by using a flow chart?</b>
You use flowcharts to have a mind-map of what you’re doing, so you can explain how your programme works. It’s a different approach as to just looking at the actual code – it is easier to see the syntax and understand it, and help you to understand the code better. It’s a good way of communicating with people – especially if they don’t have experience – it visualizes some of the logics of a programme.
When you think about algorithms, its about breaking it down – what are the parameters and inputs. You think about what functions and variables you need when you use flowcharts. I find this means flow charts can be useful in making decisions when creating a programme, as it helps you map out what functions, loops, variable and the general layout of the code
