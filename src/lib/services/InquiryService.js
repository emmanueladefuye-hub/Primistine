import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const InquiryService = {
    /**
     * Submit a new inquiry from the website form to the CRM Firestore.
     * @param {Object} inquiryData - { firstName, lastName, email, projectType, message }
     */
    trackInquiry: async (inquiryData) => {
        try {
            const inquiriesRef = collection(db, "inquiries");

            const newInquiry = {
                name: `${inquiryData.firstName} ${inquiryData.lastName}`.trim(),
                email: inquiryData.email,
                phone: inquiryData.phone || "",
                contactPreference: inquiryData.contactPreference || "Call",
                location: inquiryData.location || "",
                message: inquiryData.message,
                serviceInterest: [inquiryData.projectType],
                status: "raw",
                timestamp: serverTimestamp(),
                source: "Website Form",
                attribution: {
                    source: "website",
                    medium: "form",
                    campaign: "contact_page",
                    referrer: document.referrer || "direct"
                }
            };

            const docRef = await addDoc(inquiriesRef, newInquiry);
            console.log("Inquiry submitted with ID: ", docRef.id);
            return docRef.id;
        } catch (error) {
            console.error("Error submitting inquiry: ", error);
            throw error;
        }
    }
};
