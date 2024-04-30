package domw6y0xz;

import java.io.File;
import java.io.FileWriter;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Element;

public class DomWriteW6Y0XZ {
	 public static void main(String[] args) {
	        try {
	            File inputFile = new File("orarendW6Y0XZ.xml");
	            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
	            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
	            Document doc = dBuilder.parse(inputFile);
	            doc.getDocumentElement().normalize();

	            System.out.println("XML tartalom:");
	            printXml(doc.getDocumentElement(), "");

	            TransformerFactory transformerFactory = TransformerFactory.newInstance();
	            Transformer transformer = transformerFactory.newTransformer();
	            DOMSource source = new DOMSource(doc);
	            StreamResult result = new StreamResult(new FileWriter("orarend1W6Y0XZ.xml"));
	            transformer.transform(source, result);

	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }

	    private static void printXml(Element element, String behuzas) {
	        System.out.print(behuzas + "<" + element.getTagName());
	        if (element.hasAttributes()) {
	            for (int i = 0; i < element.getAttributes().getLength(); i++) {
	                System.out.print(" " + element.getAttributes().item(i));
	            }
	        }
	        System.out.println(">");

	        behuzas += "    ";
	        for (int i = 0; i < element.getChildNodes().getLength(); i++) {
	            if (element.getChildNodes().item(i) instanceof Element) {
	                printXml((Element) element.getChildNodes().item(i), behuzas);
	            } else {
	                System.out.println(behuzas + element.getChildNodes().item(i).getTextContent());
	            }
	        }
	        System.out.println(behuzas.substring(0, behuzas.length() - 4) + "</" + element.getTagName() + ">");
	    }
}
