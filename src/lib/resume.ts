export interface Jobs {
  company: string;
  location: string;
  datesEmployed: string;
  title: string;
  duties: string;
}

export const jobs = [
  {
    company: "Uniti Global",
    location: "Aurora, CO",
    datesEmployed: "January 2020 - Present",
    title: "Front End Developer",
    duties: [
      {
        duty:
          "Create user-friendly web pages using various programming languages including, but not limited to HTML, CSS, JavaScript and GoLang."
      },
      {
        duty:
          "Work with backend developers to troubleshoot and update usability."
      },
      {
        duty: "Design mobile-based features using Bootstrap-Vue."
      },
      {
        duty: "Test new features using jestjs."
      },
      {
        duty:
          "Help with code reviews and code versioning using a GitLab repository."
      }
    ]
  },
  {
    company: "D&J Pools",
    location: "Shreveport, LA",
    datesEmployed: "March 2017 - October 2018 + May 2003 - September 2012",
    title: "Job Foreman",
    duties: [
      {
        duty:
          "Ensure necessary equipment is loaded onto trucks on a daily basis."
      },
      {
        duty:
          "Measure pools accurately with various equipment for liner jobs and installs. "
      },
      {
        duty: "Work closely with customers one-on-one."
      },
      {
        duty:
          "Write up bills for customers when the job was completed to our standards and beyond the customer's satisfaction."
      },
      {
        duty:
          "Pick up pool kits from the warehouse and verify the contents with the purchase order."
      },
      {
        duty: "Supervised up to four employees."
      }
    ]
  },
  {
    company: "Distran Steel",
    location: "Pineville, LA",
    datesEmployed: "May 2014 - September 2014",
    title: "Machine Operator",
    duties: [
      {
        duty:
          "Work in a fast-paced production environment with time sensitive deadlines."
      },
      {
        duty:
          "Program, operate and monitor various equipment using basic math while referring to blueprints and adhering to safety standards."
      },
      {
        duty:
          "Collaborate with maintenance workers to diagnose and repair various equipment."
      },
      {
        duty:
          "Work closely with quality control to make sure parts were to specification."
      },
      {
        duty:
          "Mark parts with paint markers and/or manually hand-stamping material."
      },
      {
        duty: "Train new employees on various equipment."
      },
      {
        duty: "Report any potential safety hazards weekly."
      }
    ]
  },
  {
    company: "Old South Fabricators",
    location: "Lecompte, LA",
    datesEmployed: "February 2013 - March 2014",
    title: "Quality Control Manager",
    duties: [
      {
        duty:
          "Work in a fast-paced production environment with time sensitive deadlines."
      },
      {
        duty:
          "Visually inspect, measure and record parts with various equipment to ensure all parts were to client specifications."
      },
      {
        duty:
          "Work closely with machine operators and maintenance to keep parts within a desired tolerance."
      },
      {
        duty:
          "Inspect blueprints and autocad programs to verify they match and make corrective actions if needed. "
      },
      {
        duty:
          "Fill out various forms for records out of specification and parts that pass inspections."
      },
      {
        duty: "Label and prep all out-going packages for shipping."
      },
      {
        duty:
          "Collaborate with all departments to ensure all purchase orders were on schedule for shipping."
      },
      {
        duty: "Send off various measuring equipment needing calibration."
      },
      {
        duty: "Directly supervised three employees."
      },
      {
        duty:
          "Help with the hiring process and train new employees in my department."
      },
      {
        duty: "Participate in monthly production meetings."
      }
    ]
  }
];
export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "VueJs",
  "Node",
  "Golang",
  "Digital Ocean",
  "Git",
  "Docker",
  "MySQL",
  "Linux",
  "Windows 10"
];
