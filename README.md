# Guide for EPYMT website

## Before Starting

If you wish to preview the website when editing, you should install [Node.js](https://nodejs.org/) and run the following commands in the terminal:

```bash
npm install
```

Then, each time you want to preview the website, run:

```bash
npm run dev
```

Remarks: the terminal should be in the root directory of the project, where the `package.json` file is located.

## Updating Courses Information

First, you need to change the year in the `app/data.js` file. This will affect the navigation of "This Year's Courses" page. The "Past courses" page will automatically display years from 2023-2024 until `year-{year+1}`. 

The courses page is stored in the `app/courses`, where you will find every year's courses page. For example, the 2025-2026 courses page is the folder `app/courses/2025`. To add a new course page, you can just copy the folder of the previous year and rename it to the new year (e.g., `2026` for the 2026-2027 courses page), then update the `page.js` file inside.

Since there are no internationalization (i18n) for the courses page, the content is explicitly written in the `page.js` file and you can directly edit the file to update the page.

For the timetable, you should see two really long varables, `timetable_1` and `timetable_2`, which are the timetable for the first and second section of the course respectively., the structure of the timetable is assumed to be as follows:

```javascript
const timetable_1 = [
  {
    date: "{date}",
    lecturer: "{lecturer(can be empty)}",
    events: [
        { time: "{time}", description: "{description}" },
        { time: "{time}", description: ["{description_1}", "{description_2}", "{description_3}"] //if there are multiple descriptions, use an array
        },
        // more events...
    ]
  },
    // more dates...
];
```

## Adding Images

To add images to the website, you can just directly place the images in `public/students` folder. The website will automatically choose 10 random images from the folder to display on the "Student Life" page.
