import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/img3.jpeg";
import Img2 from "../../assets/places/img2.webp";
import Img3 from "../../assets/places/img1.webp";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Visiting Fairy Meadows: The Complete Guide",
    description:
      "Fairy Meadows is a classic stop on any Pakistani travel itinerary. This is one of the most incredible places in the country, and chances are it’s how most people discover Pakistan in the first place. Luckily, Fairy Meadows is also one of the most accessible locations in all of Pakistan and Gilgit-Baltistan. Lots of people visit here throughout the course of the year and the infrastructure is built up enough that visiting is possible for all travelers. You will, of course, have to stomach a white-knuckle jeep ride first and then hike up to Fairy Meadows yourself afterward. Despite being relatively “convenient” to visit, Fairy Meadows still requires some work.This is still Pakistan after all. In this guide, I will cover everything that you need to know in order to visit Fairy Meadows, including but not limited to where to stay, how to get there, what to bring, and what to do when you arrive. Of course, I will be covering (briefly) the hike up to the epic Nanga Parbat Base Camp as well. Google “most beautiful places in Pakistan” and, most likely, the first results will be Fairy Meadows. This green plateau, perched delicately below the enormous Nanga Parbat, is unlike any other place in the world. Words cannot describe how beautiful this area actually is. Though Fairy Meadows was inhabited before becoming a tourist destination, it didn’t have such an enchanting name until the legendary Herman Buhl and his German climbing compatriots arrived in the 1950s. Upon seeing it, they called this place MÃ¤rchenwiese, which translates as, unsurprisingly, “Fairy Meadows.”Fairy Meadows is defined by its lush vegetation and close proximity to both the Karakoram Highway and Nanga Parbat. Down below, in the Indus Valley, dust storms are kicked up by frenetic truck drivers bound for China, whilst up above, the cold, lifeless slopes of Nanga Parbat loom 8,000 meters above. Smack dab between these two landscapes is Fairy Meadows – an oasis of pine trees, miniature lakes, and gentle pastures.The Germans, who were using the area as a base camp, were right to settle in Fairy Meadows. At 3300 meters high, the location is extremely pleasant climatically and makes for the perfect base to relax at whilst planning excursions to Nanga Parbat (but that’s a whole different story).Nowadays, Fairy Meadows is practically a right of passage for those traveling in Pakistan, both foreign and local. At some point, everyone comes to stay in a log cabin for a few days and to pay respect to the “Killer Mountain”. I’ve been there four times now and every time is a treat for me – I just can’t get enough of the place. Besides, the crazy jeep ride up to the meadows is worth the trip alone!",
    date: "April 22, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Things to Do in Naran",
    description:
      "Naran Kaghan Valley is one of Pakistan's most visited tourist destinations, renowned for its breathtaking natural beauty and stunning landscapes. It is in the northwestern part of the Khyber Pakhtunkhwa province, surrounded by the mighty Himalayas and the Karakoram Mountains ranges. The valley is a haven for nature lovers, adventure seekers, and those seeking a peaceful retreat from the hustle and bustle of city life. Thousands of people plan a tour to Naran Kaghan Valley every year.This blog post is a complete guide that will provide you with all the necessary information to plan your tour to Naran Kaghan Valley. Whether you're a first-time visitor or a frequent traveller, this guide will help you make the most of your trip to this picturesque valley. It will cover everything from how to get there to where to stay, activities to do, tourist tips, and safety measures.You'll learn about the best time to visit Naran Kaghan Valley, the various modes of transportation available, and the road conditions and safety precautions to remember. It will also provide an overview of the accommodation options available, ranging from budget-friendly to luxury options, along with famous hotels and resorts in the area.In addition, it will provide insights into the different sightseeing spots and adventure activities available in Naran Kaghan Valley, such as hiking, camping, rafting, and exploring cultural experiences like local food, music, and festivals. It will also cover tips on what to pack for your Naran tour, precautions for high-altitude locations, and local customs and etiquette to follow.This blog will help you plan a tour to Naran Kaghan Valley that is comfortable and memorable. It will equip you with all the information you need to explore the unspoiled beauty of this picturesque valley and experience its breathtaking landscapes, scenic beauty, and pleasant weather.",
    date: "December 24, 2023",
  },
  {
    id: 1,
    image: Img3,
    title: "Skardu Valley",
    description:
      "The valley is about 10 kilometres wide and 40 kilometres long, with beautiful plants and animals. Finding a desert between the green valleys, lakes, waterfalls, and rivers is mesmerising. Many people from Pakistan and other countries come to Skardu every year to have a fantastic time and enjoy the beautiful scenery.This valley remains as captivating as ever for locals and visitors. The orchards full of apricots, cherries, and mulberries add to the peaceful feeling. Whether walking in the meadows or looking at the tall mountains,Skardu Valley has a unique feel that attracts travellers and explorers.Every time you visit, you’ll discover something new, and it feels like a new adventure. This Valley is like a hidden treasure you keep finding repeatedly, making each journey memorable and meaningful.",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
