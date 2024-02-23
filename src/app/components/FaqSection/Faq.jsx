// FAQSection.jsx

const FAQSection = () => {
    return (
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="accordion">
              {/* FAQ Item 1 */}
              <div className="accordion-item border-b border-gray-300 mb-4">
                <input type="checkbox" id="faq1" className="accordion-toggle" />
                <label htmlFor="faq1" className="accordion-title font-semibold text-gray-800 cursor-pointer">How do I merge videos?</label>
                <div className="accordion-content">
                  <p className="text-gray-600 mt-2">To merge videos, simply upload the video files you want to merge, arrange them in the desired order, and click the merge button. Our platform will automatically combine the videos into a single file.</p>
                </div>
              </div>
              {/* FAQ Item 2 */}
              <div className="accordion-item border-b border-gray-300 mb-4">
                <input type="checkbox" id="faq2" className="accordion-toggle" />
                <label htmlFor="faq2" className="accordion-title font-semibold text-gray-800 cursor-pointer">Can I trim multiple parts of a video?</label>
                <div className="accordion-content">
                  <p className="text-gray-600 mt-2">Yes, you can trim multiple parts of a video using our platform. Simply select the video you want to edit, use the trim tool to specify the start and end points of each segment you want to keep, and click save. Our platform will automatically trim the video according to your specifications.</p>
                </div>
              </div>
              {/* FAQ Item 3 */}
              <div className="accordion-item">
                <input type="checkbox" id="faq3" className="accordion-toggle" />
                <label htmlFor="faq3" className="accordion-title font-semibold text-gray-800 cursor-pointer">Is there a limit to the file size I can upload?</label>
                <div className="accordion-content">
                  <p className="text-gray-600 mt-2">Currently, we do have a limit on the file size you can upload. However, we recommend checking the upload guidelines on our website for the most up-to-date information on file size limits and supported formats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQSection;
  