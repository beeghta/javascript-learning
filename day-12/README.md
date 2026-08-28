# Day 12 — Composition, Inheritance \& Polymorphism

### 

### Topics Learned:

* Composition
* Encapsulation \& Private Fields
* Getter \& Setter
* Polymorphism
* Inheritance
* Excitatory \& Inhibitory
* super
* extends
* Method Overriding





Key Takeaways

Inheritance

ExcitatoryNeuron IS-A Neuron

InhibitoryNeuron IS-A Neuron



Implemented using:



extends Neuron

Polymorphism



Different neuron types can be handled using the same interface:



neuron.getInfo()

neuron.getType()

Composition



A neuron contains a recorder:



this.recorder = new NeuronRecorder();



This represents:



Neuron HAS-A NeuronRecorder

OOP Structure

&#x20;                Neuron

&#x20;               /      \\

&#x20;              /        \\

&#x20;     Excitatory      Inhibitory

&#x20;         │                │

&#x20;         └─────┬──────┘

&#x20;                 │

&#x20;            Polymorphism



Neuron

&#x20; │

&#x20; └── recorder

&#x20;       │

&#x20;  NeuronRecorder

&#x20;       │

&#x20;     records



This exercise demonstrates how JavaScript classes can be combined to create a more structured and maintainable application.

&#x20;

