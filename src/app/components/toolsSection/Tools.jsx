// ToolsSection.jsx
import styles from "./tools.module.css";
const ToolsSection = () => {
    return (
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tool 1: Merge Videos */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                {/* <img src="/merge-icon.png" alt="Merge Videos" className="w-16 h-16 mx-auto mb-4" /> */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">Merge Videos</h3>
                <p className="text-gray-600">Combine multiple video clips into a single seamless video.</p>
              </div>
              {/* Tool 2: Split Videos */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                {/* <img src="/split-icon.png" alt="Split Videos" className="w-16 h-16 mx-auto mb-4" /> */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">Split Videos</h3>
                <p className="text-gray-600">Divide long videos into smaller segments with ease.</p>
              </div>
              {/* Tool 3: Trim Videos */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                {/* <img src="/trim-icon.png" alt="Trim Videos" className="w-16 h-16 mx-auto mb-4" /> */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">Trim Videos</h3>
                <p className="text-gray-600">Remove unwanted sections from your videos effortlessly.</p>
              </div>

              
<div className={styles.icon_container}>
  <svg className={styles.icon}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="blue" />
  </svg>
</div>

            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ToolsSection;
  