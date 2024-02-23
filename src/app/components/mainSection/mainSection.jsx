'use client';
import React, { Component } from 'react';
import axios from 'axios';
import styles from "./mainSection.module.css";

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: null,
      selectedFileNames: []
    };
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function to handle file selection
  handleFileSelect(event) {
    const files = event.target.files;
    const fileNames = Array.from(files).map(file => file.name);
    this.setState({ selectedFiles: files, selectedFileNames: fileNames });
  }

  // Function to handle file drop
  handleFileDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const fileNames = Array.from(files).map(file => file.name);
    this.setState({ selectedFiles: files, selectedFileNames: fileNames });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  
    try {
      const response = await axios.post('http://localhost:3001/upload');
      console.log("Backend response:", response.data);
    } catch (error) {
      console.error('Error:', error);
      // Handle error response from backend
    }
  }
  

  render() {
    return (
      <>
      <div className="container mx-auto">
      <section className={`${styles.introSection} bg-gray-100 py-12`}>
          <div className={`${styles.container} mx-auto`}>
            <div className={styles.heading}>
              <h2>Edit Your Videos Like a Pro!</h2>
              <p>Effortlessly merge, split, and trim your videos with our intuitive platform.</p>
            </div>
          </div>
        </section>
        
        <main className={`${styles.mainSection} bg-gray-100 py-12`}>
          <div className={`${styles.container} mx-auto`}>
            {/* <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Video Merger</h1>
            <p className="text-lg text-center">Merge your videos easily with our simple and intuitive tool.</p> */}
            <form className="mt-8" onSubmit={this.handleSubmit}>
              <label htmlFor="video-upload" className={`${styles.uploadLabel} block text-center cursor-pointer border-2 border-dashed border-gray-400 px-4 py-8 rounded-md`}>
                <input
                  type="file"
                  id="video-upload"
                  className="hidden"
                  multiple
                  accept=".mp4,.mov,.avi,.mkv" // Allow only video formats
                  onChange={this.handleFileSelect}
                  onDrop={this.handleFileDrop}
                />
                <span>{this.state.selectedFileNames.length > 0 ? this.state.selectedFileNames.join(', ') : 'Drag and drop your videos here or click to browse'}</span>
              </label>
              <button type="submit" className={`${styles.uploadButton} bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600`}>Upload Videos</button>
            </form>
          </div>
        </main>
        </div>
      </>
    );
  }
}

export default MainSection;
