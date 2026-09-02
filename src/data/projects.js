import wsst2026 from '../assets/wsst-2026-2.png'
import wsst2026flight from '../assets/wsst-2026-flight.jpg'
import moss from '../assets/moss.png'
import astra from '../assets/astra-2.png'
import wsst2024 from '../assets/wsst-2024.jpg'
import ebike from '../assets/ebike-motorcontroller.png'

export const projects = [
  
  {
    title: 'Automated Soldering Centrifuge System 2026 (CANRGX9)',
    description: ["This project was created as part of the Canadian Reduced Gravity Experiment Design Challenge (CANRGX9) submission on behalf of the Waterloo Space Soldering Team.", 
                  "Deployment: This system facilitates advanced controls to automate soldering inside a centrifuge, to test soldering quality in microgravity, as part of the CANRGX9 competition in collaboration with the CSA.",
                  "It uses a servo, a BLDC, and multiple stepper motors, with FreeRTOS in STM32, to coordinate automated soldering while applying various simulated gravity samples onto a centrifuge (through the BLDC rotation).",
                  "Along with receiving telemetry from thermocouples and Hall Sensor encoders to monitor output and in-flight experiment vitals, we also developed a GUI using tkinter for granular, real-time experiment operation, administering protocols like UART, I2C, SPI and PWM for execution and data acquisition.",
                  "In addition, we integrated a heating system with 2 Pinecil mini soldering irons and GPIO control, to apply a fixed 380° temperature for melting solder joints onto perf boards.",
                  "Finally, I created a custom environment in VSCode to enable cross-compilation across STM Nucleo boards through cmake, openOCD and GNU Arm Embedded Toolchain.",
                ],
    tech: 'Novel Automated Space Soldering Solution · Embedded Systems · STM32',
    repo: 'https://github.com/asmi-g/WSST-CentrifugeRepo-2026',
    images: [wsst2026flight, wsst2026],
  },
  {
    title: 'Accessible Processor-In-The-Loop Testbed (IAC 2026)',
    description: ["MOSS is created as a prototype for a more affordable and flexible framework for processor-in-the-loop simulations for GNC algorithms.",
                  "Deployment: Its use case is for processor-in-the-loop simulations, where a given spacecraft has a defined model/behavior it needs to follow and a framework like MOSS is required for simulating the maneuvers on its flight controller only (i.e, no peripherals)",
                  "It uses a STM32 Nucleo board to simulate actuation and sensing algorithms required for a Hohmann Transfer, coplanar maneuever. Controls are executed in real-time, and the trajectory is plotted using a web interface with Cesium Ion.",
                  "It also uses a custom environment in VSCode to enable cross-compilation across STM Nucleo boards through cmake, openOCD and GNU Arm Embedded Toolchain.",
                  "Finally, this project is the subject of a paper submission to the International Astronautical Congress (IAC) 2026, and will be presented at the student conference session in Antalya, Turkey.",
    ],
    tech: 'Accessible GNC Testbed · Embedded Systems · STM32',
    repo: 'https://github.com/asmi-g/quasaris_moss',
    images: [moss],
  },
  {
    title: 'Adaptive Signal Transmission Analysis System 2025 (CANSBX7)',
    description: ["I led a team to build the software for a digital signal processing (DSP) payload for autonomous function as part of the Canadian Stratospheric Balloon Experiment Design Challenge (CAN-SBX),",
                  "Deployment: This system was launched on a stratospheric balloon gondola to test effectiveness of real-time filter tuning, in collaboration with the Canadian Space Agency.",
                  "My contributions included developing embedded software with GNU Radio for live signal transmission through Software Defined Radio (SDR) scripts, incorporating wavelet-based denoising filters to improve high-altitude signal quality with a 20 MHz bandwidth.",
                  "I also helped configure an NVIDIA Jetson Linux system-on-module (SoM) for autonomous flight operation, using systemd and bash scripts for data logging, and shutdown.",
                ],
    tech: 'Novel RF Communication Filtering · Embedded Linux · Nvidia Jetson · Python',
    repo: 'https://github.com/asmi-g/ASTRA-GeneralRepo',
    images: [astra],
  },
  {
    title: 'Soldering Centrifuge System 2024 (CANRGX7)',
    description: ["This project is a subsystem that was created as part of the Canadian Reduced Gravity Experiment Design Challenge (CANRGX7) submission on behalf of the Waterloo Space Soldering Team.", 
                  "Deployment: Controlled a centrifuge to tested soldering quality in microgravity, as part of the CANRGX7 competition in collaboration with the CSA.",
                  "It uses the L298N motor driver, a 24V gear motor, the MPU6050 accelerometer, an SD Module as well as an Arduino, to track and save acceleration and gyroscopic data while driving the motor.",
                  "It also utilizes protocols like I2C (accelerometer), SPI (SD module), and PWM (drives the motor) to run.",
                  "With our current working design, I also Implemented bidirectional USART communication with the STM32 for motor control, to interface with a GUI developed using tkinter and pyserial. This helps us to control the motor speed, and whether it's on or off using the GUI, to prevent having to rebuild and reflash the code and having to hard code a PWM value.",
                ],
    tech: 'Novel Space Soldering Solution · Embedded Systems · Arduino · STM32',
    repo: 'https://github.com/asmi-g/WSST-CentrifugeRepo',
    images: [wsst2024],
  },
  /*{
    title: 'Linux System Control Module',
    description: 'A mini platform where beginners can track coding progress and goals.',
    tech: 'React · Node · MongoDB',
    images: ['/src/assets/linux-scm.jpg'],
  },*/
  {
    title: 'Electric Bike Motor Controller',
    description: ["This project is an electric bike motor controller, that was implemented using Nucleo STM32, Arduino C++, and SimpleFOC. The purpose was to drive a BLDC motor system using the DRV8301 motor driver.",
                  "It incorporates various communication protocols like SPI, to detect and rectify over-current and over-thermal errors on the motor driver.",
                  "It was created as part of the Electrium design team, for the Spring 2023 Electric bike project.",
    ],
    tech: 'Student-Led Electric Bike Controls · Embedded Systems · STM32',
    repo: 'https://github.com/asmi-g/ElectriumFW',
    images: [ebike],
  },
]
