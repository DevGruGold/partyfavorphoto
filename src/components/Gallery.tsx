import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  author: string;
  date: string;
  text: string;
}

const Gallery = () => {
  const galleryItems = [
    {
      image: "/lovable-uploads/48af98af-f972-4155-bd47-0cf3c74b3b87.png",
      review: {
        author: "Rebecca F",
        date: "January 2023",
        text: "Our photobooth was a bit of an afterthought, but it turned out to be a highlight of our wedding! Communications with Party Favor were always easy--they were responsive and helpful at every turn! They worked with us to customize the photobooth to meet our needs."
      }
    },
    {
      image: "/lovable-uploads/3cc2987c-2e74-4ec7-8078-e34c7a1ae6f3.png",
      review: {
        author: "Andria S",
        date: "November 2021",
        text: "Our photo booth photos came out looking like grade A quality- many of our guests appreciated the ease of taking photos and the quality of the photos that were printed. The staff members were professional and so fun to interact with!"
      }
    },
    {
      image: "/lovable-uploads/ceede732-6be3-4495-8012-6c449e7756b0.png",
      review: {
        author: "Hui Jin K",
        date: "November 2021", 
        text: "Photobooth was such a crowd pleaser! The attendant kept it organized and moved the people along. The props were so much fun. Thank you for making our wedding day so special!"
      }
    },
    {
      image: "/lovable-uploads/cf071d88-4a31-46b6-af80-9d4a813ed220.png",
      review: {
        author: "Connie C",
        date: "October 2021",
        text: "We had such a great experience with Party Favor Photo. The team was so easy to work with. They sent a full gallery of our guests' pictures within 24 hours! Their price and quality cannot be beat!"
      }
    },
    {
      image: "/lovable-uploads/cd34369a-8eea-43f8-9d03-74455d747a42.png",
      review: {
        author: "Alayna B",
        date: "September 2021",
        text: "We are so happy that we chose Party Favor Photo for our photo booth! They were very responsive with all of our questions. Calvin was punctual, friendly, and very interactive with our guests."
      }
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real moments captured at real events. Here's what our clients are saying about their Party Favor Photo experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`Photo booth moment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                </div>
                <blockquote className="text-foreground mb-4 italic">
                  "{item.review.text}"
                </blockquote>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="font-medium">{item.review.author}</span>
                  <span>{item.review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to create your own unforgettable moments?
          </p>
          <a 
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium transition-colors"
          >
            Book Your Photo Booth Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;