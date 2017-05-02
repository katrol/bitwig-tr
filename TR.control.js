loadAPI(1);

host.defineController("Korg", "TR","1.0",
					"69edff00-2abd-11e7-9598-0800200c9a66");
host.defineMidiPorts(1, 1);

host.addDeviceNameBasedDiscoveryPair(["TR MIDI 1"], ["TR MIDI 1"]);

var A1 = 74;
var A2 = 71;
var A3 = 79;
var A4 = 72;
var B1 = 17;
var B2 = 19;
var B3 = 20;
var B4 = 21;

var SW1 = 80;
var SW2 = 81;

function init()
{
	host.getMidiInPort(0).setMidiCallback(onMidiPort1);

	noteIn = host.getMidiInPort(0).createNoteInput("Notes");

	cursorDevice = host.createEditorCursorDevice(2);
}

function onMidiPort1(status, data1, data2)
{
	if (isChannelController(status))
	{
		if (data1 == A1)
		{
			cursorDevice.getParameter(0).set(data2, 128);
			println("A1");
		}
		else if (data1 == A2)
		{
			cursorDevice.getParameter(1).set(data2, 128);
			println("A2");
		}
		else if (data1 == A3)
		{
			cursorDevice.getParameter(2).set(data2, 128);
			println("A3");
		}
		else if (data1 == A4)
		{
			cursorDevice.getParameter(3).set(data2, 128);
			println("A4");
		}
		else if (data1 == B1)
		{
			cursorDevice.getParameter(4).set(data2, 128);
			println("B1");
		}
		else if (data1 == B2)
		{
			cursorDevice.getParameter(5).set(data2, 128);
			println("B2");
		}
		else if (data1 == B3)
		{
			cursorDevice.getParameter(6).set(data2, 128);
			println("B3");
		}
		else if (data1 == B4)
		{
			cursorDevice.getParameter(7).set(data2, 128);
			println("B4");
		}
		else if (data1 == SW1)
		{
			cursorDevice.previousParameterPage();
			for (var i = 0; i < 8; i++)
			{
				cursorDevice.getParameter(i).setIndication(true);
			}
		}
		else if (data1 == SW2)
		{
			cursorDevice.nextParameterPage();
			for (var i = 0; i < 8; i++)
			{
				cursorDevice.getParameter(i).setIndication(true);
			}
		}
		else
		{
			println(data1 + ", " + data2);
		}
	}
}


function exit()
{
	println("exit.");
}
