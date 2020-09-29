var w = 0;

		// ^CF0,60 ^FO220,50^FDInternational Shipping, Inc.^FS ^FO50,250^GB700,1,3^FS

		var PrintCommand = "^XA" + "" +
				"^FO" + (w + 50) + ",1" + "  ^BY2" + "^BCN,120,N,N,S" + "^FD" + barcode
				+ "^FS  ^CF0,40  ^FO" + (w + 100) + ",130^FD"+barcode+"^FS " + "  ^XZ";