# NG Super Heroes

## 1. HERO COMPONENT

#### 1.1 Open the project, explore the structure

#### 1.2 Start the project -> `ng serve` -> open localhost

#### 1.3 Create the hero component files

#### 1.4 Create a basic hero layout (photo, name, description, call button)

- static text
- style encapsulation

#### 1.5 The hero class model

- create the class (id, name, description, photo)
- import it in the hero component
- create an property hero on the component with the same properties as in the interface

#### 1.6 binding to the hero

- Interpolation for name and description
- property binding for image
- event binding for Call button
- basic pipe for uppercase name

#### 1.7 two way binding -> changing the hero name

- add an input
- use ngModel and [()] - two way binding to modify the hero name
- add FormsModule to make it work

<hr>

## 2. HERO LIST

#### 2.1 create a hero-list component

- use the component in app-component
- use the hero component in it

#### 2.2 duplicate the hero component -> see the same component; how to change?

#### 2.3 create a hero array in list component

#### 2.4 hero object as input for hero component

#### 2.5 add Inputs to hero components using array index

#### 2.6 introduce \*ngFor to iterate list

#### 2.7 filter by universe

- add universe property to model
- add universe to existing heroes
- add selectedUniverse property -> start with all
- introduce \*ngIf to filter heroes by universe -> modify the value to se results
- add `<select>` with universe options
- add change event -> modify the value of selected universe
- introduce template refs to send the value directly

#### 2.8 small version of list item

- introduce new output ’small’ -> default value true
- modify styles
- add style bindings for name;
- introduce \*ngIf to hide details and call button

<hr>

## 3. MASTER DETAIL

#### 3.1 Add id property to hero model

#### 3.2 Add id’s to heroes in array.

#### 3.3 Add an ‘edit hero' button to the hero component -> alert the id

#### 3.4 Introduce the Output event binding

- create an edit Output -> event emitter of type number
- on select, emit the number
- in the list component, bind the edit event to a function

#### 3.5 Show on screen the selected hero id for editing

#### 3.6 Create the edit hero component

- Input as the hero
- form elements for name and description
- close button
- Output for close -> resets the edit index

#### 3.7 Add detail component to list component

- refactor editHero method to put selectedHero in
- selectedHero as input -> error -> use \*ngIf
- close as output -> reset selected hero -> editHero method with no arguments

<hr>

## 4. ROUTER

4.1
