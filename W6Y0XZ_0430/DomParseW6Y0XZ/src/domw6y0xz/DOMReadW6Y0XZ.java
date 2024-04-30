package domw6y0xz;

import java.io.File;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class DOMReadW6Y0XZ {
	
	 public static void main(String[] args) {
		 try {
			 File inputFille = new File("orarendW6Y0XZ.xml");
			 DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			 DocumentBuilder dBuilder =dbFactory.newDocumentBuilder();
			 Document doc = dBuilder.parse(inputFille);
			 doc.getDocumentElement().normalize();
			 
			 NodeList lista = doc.getElementsByTagName("ora");
			 
			 for(int i = 0; i<lista.getLength(); i++) {
				 Node node = lista.item(i);
				 if (node.getNodeType() == Node.ELEMENT_NODE) {
					 Element element = (Element) node;
					 String id = element.getAttribute("id");
	                 String targy = element.getElementsByTagName("targy").item(0).getTextContent();
	                 String nap = element.getElementsByTagName("nap").item(0).getTextContent();
	                 String tol = element.getElementsByTagName("tol").item(0).getTextContent();
	                 String ig = element.getElementsByTagName("ig").item(0).getTextContent();
	                 String helyszin = element.getElementsByTagName("helyszin").item(0).getTextContent();
	                 String oktato = element.getElementsByTagName("oktato").item(0).getTextContent();
	                 String tipus = element.getElementsByTagName("tipus").item(0).getTextContent();
	                 
	                 System.out.println("Óra ID: " + id);
	                 System.out.println("Tárgy: " + targy);
	                 System.out.println("Időpont: ");
	                 System.out.println("\tNap: " + nap); 
	                 System.out.println("\tTól: " + tol);
	                 System.out.println("\tIg: " + ig);
	                 System.out.println("Helyszín: " + helyszin);
	                 System.out.println("Oktató: " + oktato);
	                 System.out.println("Típús" + tipus);
				 }
			 }
		 }
		 catch (Exception e){ 
			 e.printStackTrace();
		 }
	 }
}
