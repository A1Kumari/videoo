// HowToUseSection.jsx
import Image from 'next/image';

const HowToUseSection = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">How to Use Our Website</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1: Select Video */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Step 1: Select Video</h3>
                <p className="text-gray-600 mb-4">Choose the video you want to edit from your device.</p>
                {/* <img src="/select-video.png" alt="Select Video" className="mx-auto mb-4" /> */}
                <Image src="/path/to/image.jpg" alt="Description" width={500} height={300} />
              </div>
              {/* Step 2: Edit Video */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Step 2: Edit Video</h3>
                <p className="text-gray-600 mb-4">Use our intuitive tools to split, trim, or merge your video.</p>
                {/* <img src="/edit-video.png" alt="Edit Video" className="mx-auto mb-4" /> */}
              </div>
              {/* Step 3: Save and Download */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Step 3: Save and Download</h3>
                <p className="text-gray-600 mb-4">Once you&apos;re satisfied, save your changes and download the edited video.</p>
                {/* <img src="/save-download.png" alt="Save and Download" className="mx-auto mb-4" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowToUseSection;
  