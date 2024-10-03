var documenterSearchIndex = {"docs":
[{"location":"release_notes/#Release-Notes","page":"Release Notes","title":"Release Notes","text":"","category":"section"},{"location":"release_notes/#0.1.0-(25-09-2024)","page":"Release Notes","title":"0.1.0 (25-09-2024)","text":"","category":"section"},{"location":"release_notes/","page":"Release Notes","title":"Release Notes","text":"Initial release with basic functionality needed to run the first 3 examples.","category":"page"},{"location":"api/#Public-Documentation","page":"Public APIs","title":"Public Documentation","text":"","category":"section"},{"location":"api/","page":"Public APIs","title":"Public APIs","text":"Documentation for PYTHIA8.jl public interface.","category":"page"},{"location":"api/","page":"Public APIs","title":"Public APIs","text":"","category":"page"},{"location":"api/#Index","page":"Public APIs","title":"Index","text":"","category":"section"},{"location":"api/","page":"Public APIs","title":"Public APIs","text":"Pages   = [\"api.md\"]\nModules = [PYTHIA8]\nOrder   = [:type]","category":"page"},{"location":"api/","page":"Public APIs","title":"Public APIs","text":"Pages   = [\"api.md\"]\nModules = [PYTHIA8, Base]\nOrder   = [:function]","category":"page"},{"location":"api/","page":"Public APIs","title":"Public APIs","text":"","category":"page"},{"location":"api/#Types","page":"Public APIs","title":"Types","text":"","category":"section"},{"location":"api/","page":"Public APIs","title":"Public APIs","text":"This is the list of all types and functions defined for PYTHIA8","category":"page"},{"location":"api/","page":"Public APIs","title":"Public APIs","text":"Modules = [PYTHIA8]\nOrder = [:type]","category":"page"},{"location":"api/#Functions","page":"Public APIs","title":"Functions","text":"","category":"section"},{"location":"api/","page":"Public APIs","title":"Public APIs","text":"Modules = [PYTHIA8]\nOrder = [:function]","category":"page"},{"location":"api/#PYTHIA8.__init__-Tuple{Pythia8!UserHooks}","page":"Public APIs","title":"PYTHIA8.__init__","text":"__init__(self::UserHooks)\n\nThis function initializes the UserHooks object by creating an instance of Pythia8UserHooks  and setting the hooks for each method defined by the user.\n\n\n\n\n\n","category":"method"},{"location":"#Julia-bindings-for-PYTHIA","page":"Introduction","title":"Julia bindings for PYTHIA","text":"","category":"section"},{"location":"#Description","page":"Introduction","title":"Description","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Julia bindings for the PYTHIA package used for generating high-energy physics collision events. It facilitates the interface with the PYTHIA client library, by writing Julia code instead of having to write C++ code. This package is developed using the CxxWrap.jl package to wrap C++ types and functions to Julia. Wrapper C++ code is generated with the help of WrapIt tool that uses of the clang library.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"The Julia interface has been inspired by the functionality provided by Pythia Python interface.","category":"page"},{"location":"#Installation","page":"Introduction","title":"Installation","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The PYTHIA8.jl package does no require any special installation. Stable releases are registered into the Julia general registry, and therefore can be deployed with the standard Pkg Julia package manager. This would bring automatically an installation of PYTHIA binary libraries as artifacts corresponding to the current platform (the so called _jll packages). Linux and MacOS operating systems with x86_64, powerpc64le and aarch64 architectures are supported. ","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"julia> using Pkg\njulia> Pkg.add(\"PYTHIA8\")","category":"page"},{"location":"#Interface","page":"Introduction","title":"Interface","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Only the classes that provide the everyday functionality of PYTHIA have been wrapped. Additional classes and functionality can be included upon request. This is a summary of the currently provided classes:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"top level: Pythia, PythiaParallel\nevent access: Event, Particle, Vec4\nsettings and information: HIInfo, Settings, Flag, Mode, Parm, Word, FVec, MVec, PVec, WVec\nuser interface pointers: Rndm, PDF, DecayHandler, RndmEngine, UserHooks, MergingHooks, BeamShape, SigmaProcess, TimeShower, SpaceShower, HeavyIons\nanalysis tools: Hist, HistPlot, SlowJet\nkinematic functions: m, m2, dot3, cross3, cross4, theta, costheta, phi, cosphi, RRapPhi, REtaPhi","category":"page"},{"location":"#Limitations","page":"Introduction","title":"Limitations","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Methods returning or accepting as argument a std::map have not been wrapped since this is a current limitation of the CxxWrap package.","category":"page"},{"location":"#Getting-Started","page":"Introduction","title":"Getting Started","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Have a look at the following trivial interactive session:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"julia> using PYTHIA8\n\njulia> pythia = PYTHIA8.Pythia(\"\", false)\nPYTHIA8.Pythia8!PythiaAllocated(Ptr{Nothing} @0x00000001200d0000)\n\njulia> csets = pythia |> settings # which equivalent to csets = settings(pythia)\nCxxRef{Pythia8!Settings}(Ptr{Pythia8!Settings} @0x00000001200d02d0)\n\njulia> list(csets, \"Init:\")\n *-------  PYTHIA Flag + Mode + Parm + Word + FVec + MVec + PVec + WVec Settings (with requested string) ----------* \n |                                                                                                                 | \n | Name                                          |                      Now |      Default         Min         Max | \n |                                               |                          |                                      | \n | Init:showAllParticleData                      |                      off |          off                         | \n | Init:showAllSettings                          |                      off |          off                         | \n | Init:showChangedParticleData                  |                       on |           on                         | \n | Init:showChangedResonanceData                 |                      off |          off                         | \n | Init:showChangedSettings                      |                       on |           on                         | \n | Init:showMultipartonInteractions              |                       on |           on                         | \n | Init:showOneParticleData                      |                        0 |            0           0             | \n | Init:showProcesses                            |                       on |           on                         | \n |                                                                                                                 | \n *-------  End PYTHIA Flag + Mode + Parm + Word + FVec + MVec + PVec + WVec Settings  -----------------------------* \n julia> parm(csets, \"Beams:eA\")\n7000.0","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Note that class methods are called with the object instance as first argument. In C++ the parm(...) method of the Settings class would be called as csets.parm(\"Beams:eA\") being csets an instance of Settings, while in Julia it is called as parm(csets, \"Beams:eA\"). Thanks to the Julia multi-dispatch we do not need to prefix the methods with the module name PYTHIA8.parm, even for very common function names such as list.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Also notice that the default printout of any wrapped object is of the form C++/Julia type(at some address @0xXXXXXX) like this one: CxxRef{Pythia8!Settings}(Ptr{Pythia8!Settings} @0x00000001200d02d0). In this particular example, the C++ type is a reference to Pythia8::Settings and the object is at the memory address 0x00000001200d02d0.","category":"page"},{"location":"#Examples","page":"Introduction","title":"Examples","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Currently the following examples are implemented replicating the equivalent Python ones.","category":"page"},{"location":"#[main291.jl](https://github.com/JuliaHEP/PYTHIA8.jl/blob/main/examples/main291.jl)","page":"Introduction","title":"main291.jl","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Simple test program, equivalent to main101.cc, but written in Julia. It fits on one slide in a talk. It studies the charged multiplicity distribution at the LHC.","category":"page"},{"location":"#[main292.jl](https://github.com/JuliaHEP/PYTHIA8.jl/blob/main/examples/main292.jl)","page":"Introduction","title":"main292.jl","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Simple test program to illustrate the usage of PythiaParallel in Julia. The physics case is equivalent to main291, but in parallel.","category":"page"},{"location":"#[main293.jl](https://github.com/JuliaHEP/PYTHIA8.jl/blob/main/examples/main293.jl)","page":"Introduction","title":"main293.jl","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Example how you can use UserHooks to trace pT spectrum through the program, and veto undesirable jet multiplicities. It is based on main242.cc.","category":"page"},{"location":"#Tests","page":"Introduction","title":"Tests","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"Unit tests can be run with julia --project=. test/runtests.jl. It runs in addition all the implemented examples to ensure their correct execution and detection of any regression.","category":"page"},{"location":"#Roadmap","page":"Introduction","title":"Roadmap","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"There are a number of issues and problems still to be resolved. We keep track of them in this list:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"implement more examples","category":"page"}]
}
