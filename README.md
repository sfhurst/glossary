# report_resource (iterate)

A tabbed inspection manual with built-in report tools

## Table of Contents

- [Overview](#overview)
  - [Key Features](#key-features)
- [Installation](#installation)
- [Prerequisites](#prerequisites)
  - [Requirements](#requirements)
  - [Data Updates](#data-updates)
- [Code Practices](#code-practices)
  - [Webpage Layout](#webpage-layout)
  - [How to Use](#how-to-use)
  - [Offline Usage](#offline-usage)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Overview

The **Bridge Inspection Report Companion Tool** is a web-based application designed to streamline and simplify the process of writing bridge inspection reports, as well as reports for culverts and retaining walls. This tool consolidates all relevant resources and data into one location, eliminating the need to search for documents and guidance during report creation.

### Key Features:

- **Tabbed Information Sections**: Organized sections that provide easy access to key details, including rating tables, example comments, and component evaluation guidance.
- **Official Document Links**: Quick access to important regulations and standards related to bridge inspection, culverts, and retaining walls.
- **Report Assistance**: Pre-written example comments that can be copied directly into reports, saving time and ensuring consistency.
- **Structure Data Retrieval**: Quickly access relevant information about the structure being inspected, such as previous reports or asset data.
- **Error Checks and Asset Counts**: Built-in tools to perform error checks and track asset counts, ensuring inspections are thorough and accurate.

This tool is specifically designed for bridge inspectors, engineers, and related professionals who need an all-in-one platform for creating inspection reports. By centralizing documentation, comment templates, and evaluation criteria, the tool helps reduce the time spent searching for resources and minimizes errors in report generation.

## Installation

Open the `index.html` file in your browser.

## Prerequisites

This tool is built using **vanilla JavaScript**, **CSS**, and **HTML**, and does not require any server-side setup or frameworks like Node.js. It is designed to work locally directly from the `index.html` file, without the need for server configurations.

### Requirements:

- **Web Browser**: The tool can be run locally in any modern web browser (Chrome, Firefox, Edge, etc.).
- **Local File Access**: Since the data is stored in JavaScript objects instead of separate JSON files, no server is needed. This allows the tool to be used offline or directly from a local file, eliminating issues like CORS (Cross-Origin Resource Sharing) errors.

### Data Updates:

- The data used by the tool is stored in JavaScript objects, which are periodically updated (approximately every 3 months) to ensure accuracy and reflect any changes to the inspection criteria, comments, or guidelines. The data will need to be manually converted from JSON to JavaScript objects to keep the tool current.

For local usage, simply download or clone the repository, open the `index.html` file in your browser, and begin using the tool immediately.

## Code Practices

- **HTML IDs and Classes**: All `ids` and `classes` are written in lowercase with hyphens separating words (e.g., `button-header`, `inspection-table`).
- **Classes**: Classes are used primarily for CSS styling and are typically plural (e.g., `buttons`, `sections`) to represent groups of elements.
- **IDs**: IDs are used for JavaScript targeting and typically use singular nouns (e.g., `submit-button`, `inspection-form`).
- **Data Handling**: JSON data is converted into JavaScript objects for use within the tool. This approach avoids external dependencies and CORS issues.
- **Naming Conventions**: Ensure consistency in naming variables and functions across the JavaScript code, making it easier to maintain and expand the tool.

## Usage

The **Bridge Inspection Report Companion Tool** is organized into a tabbed interface designed to provide easy access to all the resources needed for writing bridge, culvert, and retaining wall inspection reports. The webpage is structured in a top-down layout with several rows of tabs, each offering different functionality.

### Webpage Layout:

1. **Top Row (Asset Tabs and Glossaries)**:  
   The top row consists of four main tabs:

   - **Bridges**
   - **Culverts**
   - **Retaining Walls**
   - **Glossaries**

   Each of these tabs corresponds to different types of assets you may be inspecting and a glossary of terms. The active tab in this row will determine the content displayed in the following rows.

2. **Second Row (Subcategory Tabs)**:  
   Below the top row, the second row contains subcategory tabs that adjust based on the selected top row tab. These subcategories include relevant information specific to the selected top row tab, such as:

   - Bridge Components
   - Links to Official Documents
   - Glossaries of Terms

   The subcategory tabs are dynamically updated depending on the selected tab above.

3. **Third Row (Optional)**:  
   In some cases, a third row of tabs may appear based on the selection made in the second row. This row will display additional details or sub-options related to the specific subcategory selected, such as:

   - Rating Tables
   - Example Comments
   - Component Evaluation Guidance

4. **Content Display Area**:  
   Below these rows of tabs, the data is displayed. This section includes detailed information for the selected asset and subcategory, such as:
   - Rating tables and values
   - Example comments that can be copied directly into reports
   - Guidelines for component evaluation
   - Links to official documentation

### How to Use:

- **Navigating Through Tabs**: Click on any of the top row tabs (Bridge, Culvert, Wall, or Glossaries) to switch between different tabs.
- **Exploring Subcategories**: Once you select a top row tab, the second row of subcategory tabs will update. Click on these tabs to view specific content related to your selected top row tab.
- **Additional Rows**: If a third row appears (based on your second-row selection), navigate through these tabs to access even more specific details or options.
- **Viewing Data**: Below the tabs, the content will update based on your tab selections. Here, you’ll find the information you need to complete your inspection report, including rating tables, sample comments, and official documents.

### Offline Usage:

- Since the tool is fully functional locally, you can open the `index.html` file in any modern browser and start using it immediately, without needing a server or internet connection.

This tool simplifies the inspection report writing process by consolidating all the necessary resources into one interface, making it easier for inspectors and engineers to create comprehensive and accurate reports.

## Technologies

- **HTML, CSS, JavaScript** – Core technologies for building the web interface.
- **ZURB Foundation** – Responsive front-end framework used for styling and layout.
- **GitHub Pages** – Hosting platform for serving the tool.
- **jsDelivr** – CDN for delivering external libraries efficiently.
- **Google Fonts API** – Used for typography and font styling.

## License

This project is not licensed, and all rights are reserved to the author.
