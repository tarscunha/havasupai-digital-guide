'use server';

// Static content service - no database required
// To edit content, modify the values in this file

const staticContent = {
    hero: {
        title: "Welcome to Havasupai",
        description: "The Official Home of the Havasupai Tribe. Discover the beauty and culture of our ancestral lands.",
        imageUrl: "/images/hero/havasu-falls-hero.jpg",
    },
    reservations: {
        title: "2025 Tourism Season Reservations",
        description: "<p>We are excited to announce the opening of reservations for the 2025 tourism season. Please read all information carefully before proceeding with your booking.</p>",
        campgroundTitle: "Campground Reservations",
        campgroundPrice: "$455 per person",
        campgroundDesc: "For 3 nights, includes all applicable fees and taxes.",
        lodgeTitle: "Lodge Reservations",
        lodgePrice: "$2,277 per lodge room",
        lodgeDesc: "For up to four people, 3 nights, includes all applicable fees and taxes.",
    },
    "visitor-info": {
        title: "Important Visitor Information",
        description: "<p>The Havasupai Tribe looks forward to welcoming our visitors back to Supai. Please read carefully and ensure that all members of your reservation group understand and agree to the following information.</p>",
        checkInTitle: "Check-in Process",
        checkInDesc: "<p>Check-in for ALL permit reservations (campground and lodge) takes place at <strong>Grand Canyon Caverns Inn</strong>, located at Mile Marker 115, Route 66 near Peach Springs, Arizona 86434. The trip leader MUST check-in for all members of their group. Failure to do so will result in your reservation being cancelled. No refunds or rescheduling of dates will be issued.</p><p>Office hours for July 2025 are 6 am – 6 pm each day. Please note: checking in by noon on the day of your reservation is no longer required since the trail is open 24 hours. Therefore you can check-in any time the day before or the day of your reservation during business hours.</p>",
        checkInDetails: "<ul><li>The trip leader will need to provide photo ID to receive all permits, wristbands, bag tags, and an entrance form.</li><li>All vehicle license plates must be registered upon check-in.</li><li>You can start the hike on any day of your reservation, and you must depart on or before the last day of your reservation. There is no refund for unused days.</li><li>The trail is open for hiking 24 hours a day. Please use caution as assistance may not be readily available during non-business hours. It is recommended to avoid hiking between the hours of 10AM-3PM during excessive heat.</li></ul>",
        rulesTitle: "General Rules & Recommendations",
        rulesDesc: "<p>It is the responsibility of each tourist to bring the necessary gear and equipment for camping. The tribe does not offer or sell tents, sleeping bags, heaters or other camping supplies. The store stocks a limited number of food items, but you should bring your own food, water, etc. Plan accordingly for changes in weather, the Reservation can experience high and low temperatures, wind, rain and snow.</p><p>Please respect the sovereignty of the Havasupai Tribe and abide by all posted signage and instructions from the rangers. Only hike in designated areas.</p>",
        packInOutTitle: "Pack It In, Pack It Out",
        packInOutInfo: "<p>To address the issue of tourists leaving trash and gear in the canyon, the tribe has authorized a civil citation and fine of up to $1,000. Individuals will be cited for failure to take all their trash and gear out of the canyon. Leave no trace (Pack It In, Pack It Out). Please help keep the Havasupai lands clean. The cost to remove tourist trash and gear by helicopter is substantial. You are responsible to take out what you bring in!</p>",
        trailheadTitle: "Hilltop Trailhead",
        trailheadInfo: "<p>Please note: There is NO camping at Hilltop. That includes no sleeping in your vehicle at Hilltop. There is limited parking at the trailhead. Additional parking is available along the road leading to the trailhead.</p>",
    },
    "mules-info": {
        title: "Havasupai Mules",
        imageUrl: "/images/mules/mule-train.jpg",
        content: "<p>Havasupai mules play a vital role in transporting supplies and gear for both tribal members and visitors. They are an integral part of the Havasupai way of life and a traditional means of transport in the rugged canyon terrain.</p><h3>Mule Reservations</h3><p>To ensure availability, it is highly recommended to reserve pack mules online a minimum of <strong>48-72 hours in advance</strong> of your visit.</p><ul><li>All pack mules must be reserved in advance.</li><li>For campground reservations, book at <a href=\"https://havasupaireservations.com\" target=\"_blank\" rel=\"noopener noreferrer\">HavasupaiReservations.com</a>.</li><li>For lodge reservations, book at <a href=\"https://havasupailodge.com\" target=\"_blank\" rel=\"noopener noreferrer\">HavasupaiLodge.com</a>.</li><li>Mule services are subject to availability and tribal regulations.</li></ul><p>Mules are essential for those who prefer not to carry all their gear on the hike to Supai Village and the falls. Please respect the animals and the handlers, and follow all guidelines provided by the Tribe regarding mule usage.</p>"
    },
    "store-cafe": {
        title: "Supai Store & Cafe",
        imageUrl: "/images/supai-village/supai-store.jpg",
        content: "<p>The store and the cafe will be open to tourists during normal operating hours. It is possible that there will be occupancy restrictions, please abide by all signage and onsite instructions.</p><h3>Cafe Hours & Favorites</h3><ul><li>Cafe hours: 8am to 5pm (may vary).</li><li>Cafe favorites: French Fries, Hamburgers, Supai Signature dishes, Supai Combo.</li></ul><h3>Store Hours & Items</h3><ul><li>Store hours: 7am to 5:30pm (Mon-Fri), 8am to 5pm (Sat-Sun) (may vary).</li><li>Items sold: soda, water, Gatorade, ice cream, travel-sized toiletries, fruit, canned goods.</li><li>Prices are adjusted due to the remote location and transportation costs.</li></ul><p>Please continue to visit our official Facebook tourism page for updates and information. And as always, please visit <a href=\"http://www.havasupaireservations.com\">www.havasupaireservations.com</a> for updated information.</p><p>If you have any questions related to the Tribe's tourism activities, please reach out to <a href=\"mailto:support@havasupaireservations.com\">support@havasupaireservations.com</a>.</p>"
    },
    government: {
        clothingAssistanceTitle: "HAVASUPAI TRIBE SCHOOL CLOTHING ASSISTANCE",
        clothingAssistanceDesc: "School clothing funding assistance is available for students from Early Head Start through 12th grade. Please complete the application and submit it to the Tribal Secretary's office via email at htsec1@havasupai-nsn.gov or mail to Tribal Secretary, P.O. Box 10 Supai, Arizona 86435.",
        clothingAssistanceUrl: "https://theofficialhavasupaitribe.com/files/2021_School_Clothing_Assistance_Application.pdf",
        vaccineIncentiveTitle: "Havasupai Tribe Vaccination Incentive Program",
        vaccineIncentiveDesc: "The Havasupai Tribal Council has approved a vaccination incentive program to encourage all members to get vaccinated.",
        vaccineIncentiveUrl: "https://www.theofficialhavasupaitribe.com/files/Havasupai_Vaccination_Incentive_Program.pdf",
    },
    advocacy: {
        title: "Advocacy & News",
        imageUrl: "/images/advocacy/uranium-mining-protection.png",
        content: "<h3>Uranium mining still threatens the Grand Canyon, our tribe's sacred home</h3><p><em>Written by Chairwoman Bernadine Jones in an opinion piece for AZ Central:</em></p><blockquote>\"Uranium mining still threatens the Grand Canyon, our tribe's sacred home. We are often forgotten deep in the canyon. But we are here, and we're here to fight against harm - both past and likely to come - facing Natives and others in the region.\"</blockquote><p><a href=\"https://www.azcentral.com/story/opinion/op-ed/2024/06/05/grand-canyon-monument-lawsuit-uranium-mining-havasupai/73967579007\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>View Article on AZ Central</strong></a></p><hr/><p>&nbsp;</p><h3>Congress Must Act to Save the Havasupai Tribe from Extinction</h3><p><em>Written by Chairwoman Kissoon in an opinion piece for Newsweek:</em></p><blockquote>\"We have seen the irreparable damage uranium mining can do. For generations we have been at the forefront, working to permanently protect our homelands from uranium mining... We urge the Senate to do the right thing and protect the Grand Canyon now and for future generations.\"</blockquote><p><a href=\"https://www.newsweek.com/congress-must-act-save-havasupai-tribe-extinction-opinion-1654939\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>View Newsweek Article</strong></a></p><hr/><p>&nbsp;</p><h3>Havasupai Tribe Provides Testimony at United States Senate Committee</h3><p>Hearing on S. 387, To protect, for current and future generations, the watershed, ecosystem, and cultural heritage of the Grand Canyon region in the State of Arizona...</p><p><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>View PDF</strong></a></p>"
    },
    jobs: {
        title: "Current Job Openings",
        description: "The Havasupai Tribe is looking for dedicated individuals to join our team. Explore the available opportunities to contribute to our community.",
        applicationUrl: "https://www.theofficialhavasupaitribe.com/files/Jobs/Tourism-Assistant-Manager-2024.pdf",
        jobListings: "Open May 21, 2024: TOURISM ASSISTANT MANAGER\nClosed: HEAD START DIRECTOR FOR THE HAVASUPAI TRIBE\nClosed: TOURISM ASSISTANT MANAGER\nClosed: TOURISM CUSTOMER SERVICE CLERKS\nClosed: SCANNING/DATA ENTRY CLERK\nClosed: SUPAI HEALTH STATION MAINTENANCE WORKER",
        hrContactInfo: "<strong>Human Resources</strong><br>P.O. Box 10, Supai, AZ 86435<br>Phone: (928) 448-2751<br>Fax: (928) 448-2551"
    },
};

type GetContentResult = {
    content: any;
    error: string | null;
};

// Static content service - always returns the static content
export const getContent = async (): Promise<GetContentResult> => {
    return { content: staticContent, error: null };
};

// Static content getter for specific sections
export const getSectionContent = async (section: string) => {
    return (staticContent as any)[section] || null;
};
