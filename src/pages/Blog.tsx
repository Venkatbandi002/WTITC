import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Rise of Telugu Technocrats in Silicon Valley",
    excerpt: "Exploring how the Telugu community is making waves in the world's leading tech hub, from startups to Fortune 500 companies.",
    author: "Dr. Ramesh Kumar",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Industry Insights"
  };

  const recentPosts = [
    {
      title: "AI and Machine Learning: Trends for 2025",
      excerpt: "Deep dive into the latest AI trends and how Telugu professionals are contributing to cutting-edge research.",
      author: "Priya Reddy",
      date: "January 10, 2025",
      category: "Technology"
    },
    {
      title: "Success Story: From Hyderabad to Silicon Valley",
      excerpt: "An inspiring journey of a WTITC member who built a successful startup in the Bay Area.",
      author: "Vikram Chowdary",
      date: "January 5, 2025",
      category: "Success Stories"
    },
    {
      title: "Building a Global Tech Community",
      excerpt: "How WTITC is creating bridges between Telugu professionals across continents.",
      author: "Lakshmi Naidu",
      date: "December 28, 2024",
      category: "Community"
    },
    {
      title: "Emerging Technologies: Blockchain and Web3",
      excerpt: "Understanding the next wave of innovation and opportunities in decentralized technologies.",
      author: "Karthik Venkat",
      date: "December 20, 2024",
      category: "Technology"
    },
    {
      title: "Mentorship Matters: Growing the Next Generation",
      excerpt: "The impact of mentorship programs on student success and career development.",
      author: "Sundeep Kumar Makthala",
      date: "December 15, 2024",
      category: "Education"
    },
    {
      title: "Investment Opportunities in Indian Tech Startups",
      excerpt: "A guide for NRI investors looking to support innovation back home.",
      author: "Anil Kumar",
      date: "December 10, 2024",
      category: "Business"
    }
  ];

  const categories = [
    { name: "Technology", count: 25 },
    { name: "Success Stories", count: 18 },
    { name: "Industry Insights", count: 15 },
    { name: "Community", count: 20 },
    { name: "Education", count: 12 },
    { name: "Business", count: 10 }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Resources & Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Insights, stories, and updates from the Telugu tech community
        </p>
      </section>

      {/* Featured Post */}
      <section>
        <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth">
          <div className="md:flex">
            <div className="md:w-1/2 h-80 bg-gradient-hero"></div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full w-fit mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <span>{featuredPost.readTime}</span>
              </div>
              <Button>
                Read Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Posts */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
          {recentPosts.map((post, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-smooth">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <Card className="p-6 shadow-card">
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between p-2 rounded hover:bg-secondary transition-smooth text-left"
                >
                  <span className="text-sm">{category.name}</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </Card>

          {/* Trending */}
          <Card className="p-6 shadow-card bg-gradient-hero">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-lg">Trending Topics</h3>
            </div>
            <div className="space-y-2">
              {["AI & Machine Learning", "Career Growth", "Startup Funding", "Cloud Computing", "Mentorship"].map((topic, index) => (
                <div key={index} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-smooth">
                  #{topic.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
                </div>
              ))}
            </div>
          </Card>

          {/* Newsletter */}
          <Card className="p-6 shadow-card bg-primary text-white">
            <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
            <p className="text-sm text-white/90 mb-4">
              Get the latest articles and updates delivered to your inbox
            </p>
            <a 
              href="https://forms.gle/QHmQ5K4AiSW9VuLz7" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="w-full">
                Subscribe Now
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
