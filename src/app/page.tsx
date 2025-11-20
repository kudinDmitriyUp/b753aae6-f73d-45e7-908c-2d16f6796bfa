"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ChefHat, Grape, Utensils, Wine, Star, Crown, Menu, Sun, Users, MessageCircle, Calendar, User } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="dotGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            {"name": "Menu", "id": "menu"},
            {"name": "About", "id": "about"},
            {"name": "Team", "id": "team"},
            {"name": "Reviews", "id": "testimonials"}
          ]}
          brandName="Amore Mio"
          button={{
            "text": "Reserve Table",
            "href": "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Amore Mio"
          description="Authentic Italian cuisine in the heart of Milan. Experience the finest traditional flavors with a modern touch."
          buttons={[
            {"text": "View Menu", "href": "menu"},
            {"text": "Make Reservation", "href": "contact"}
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632245608-io4f1x1s.jpg"
          imageAlt="Amore Mio restaurant elegant dining interior"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="We believe in creating unforgettable dining experiences that celebrate the rich culinary traditions of Italy while embracing innovation and excellence."
          features={[
            {
              "icon": ChefHat,
              "title": "Authentic Recipes",
              "description": "Traditional Italian recipes passed down through generations, prepared with passion and authenticity by our master chefs."
            },
            {
              "icon": Grape,
              "title": "Premium Ingredients",
              "description": "We source only the finest ingredients directly from Italy, ensuring every dish delivers exceptional quality and taste."
            },
            {
              "icon": Utensils,
              "title": "Elegant Atmosphere",
              "description": "Immerse yourself in our sophisticated ambiance, perfect for romantic dinners, business meetings, and special celebrations."
            },
            {
              "icon": Wine,
              "title": "Curated Wine Selection",
              "description": "Our sommelier has carefully selected premium Italian wines to perfectly complement every dish on our menu."
            }
          ]}
        />
      </div>
      
      <div id="menu" data-section="menu">
        <FeatureCardOne
          title="Our Signature Dishes"
          description="Discover our carefully crafted menu featuring the finest Italian specialties"
          tag="Menu Highlights"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              "title": "Authentic Cuisine",
              "description": "Traditional Italian dishes prepared with time-honored techniques and the freshest ingredients imported directly from Italy.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632246340-e5sl6fmn.jpg",
              "imageAlt": "Traditional Italian pasta dishes"
            },
            {
              "title": "Premium Ingredients",
              "description": "We source only the finest ingredients - San Marzano tomatoes, Parmigiano-Reggiano, fresh herbs, and extra virgin olive oil.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632246985-g3z4ljad.jpg",
              "imageAlt": "Fresh Italian ingredients"
            },
            {
              "title": "Elegant Ambiance",
              "description": "Dine in our sophisticated atmosphere with warm lighting, classical music, and impeccable service for an unforgettable experience.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632247745-hre0tov6.jpg",
              "imageAlt": "Elegant restaurant dining room"
            },
            {
              "title": "Wine Selection",
              "description": "Our curated collection features over 200 premium Italian wines, expertly paired with our dishes by our certified sommelier.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632248404-zk5ssi51.jpg",
              "imageAlt": "Italian wine collection"
            }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Specialties"
          description="Experience our most beloved dishes, crafted with passion and authentic Italian tradition"
          tag="Chef's Selection"
          tagIcon={Crown}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              "id": "signature-pasta",
              "name": "Signature Pasta al Tartufo",
              "price": "€28",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632249119-d6wom7z1.jpg",
              "imageAlt": "Gourmet pasta with truffle"
            },
            {
              "id": "risotto-special",
              "name": "Risotto ai Porcini",
              "price": "€25",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632249802-dqarh618.jpg",
              "imageAlt": "Luxury mushroom risotto"
            },
            {
              "id": "tiramisu-dessert",
              "name": "Tiramisu della Casa",
              "price": "€12",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632250462-49q5ttnv.jpg",
              "imageAlt": "Authentic Italian tiramisu"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Dining Experiences"
          description="Choose from our carefully curated dining packages for every occasion"
          tag="Menu Options"
          tagIcon={Menu}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              "id": "casual-dining",
              "badge": "Perfect for Lunch",
              "badgeIcon": Sun,
              "price": "€35",
              "subtitle": "Light & Fresh Experience",
              "features": [
                "Antipasti selection",
                "Choice of pasta or risotto",
                "House wine glass",
                "Dessert of the day"
              ]
            },
            {
              "id": "fine-dining",
              "badge": "Most Popular",
              "badgeIcon": Star,
              "price": "€65",
              "subtitle": "Complete Italian Journey",
              "features": [
                "Premium antipasti platter",
                "Primo & secondo course",
                "Wine pairing (3 glasses)",
                "Signature dessert",
                "Espresso & digestivo"
              ]
            },
            {
              "id": "chef-tasting",
              "badge": "Chef's Special",
              "badgeIcon": Crown,
              "price": "€95",
              "subtitle": "Ultimate Culinary Adventure",
              "features": [
                "7-course tasting menu",
                "Premium wine pairing",
                "Chef's table experience",
                "Personalized service",
                "Exclusive ingredients"
              ]
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The passionate professionals who bring authentic Italian cuisine to life"
          tag="Our People"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              "id": "chef-marco",
              "name": "Chef Marco Rossi",
              "role": "Executive Chef",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632251014-nkgta2ot.jpg",
              "imageAlt": "Chef Marco Rossi portrait"
            },
            {
              "id": "sommelier-lucia",
              "name": "Lucia Bianchi",
              "role": "Head Sommelier",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632251572-tttzczxv.jpg",
              "imageAlt": "Lucia Bianchi sommelier portrait"
            },
            {
              "id": "manager-giovanni",
              "name": "Giovanni Ferri",
              "role": "Restaurant Manager",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632252286-xmixuog5.jpg",
              "imageAlt": "Giovanni Ferri manager portrait"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Experience the joy and satisfaction of our valued customers"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              "id": "maria-review",
              "name": "Maria",
              "handle": "@maria_milano",
              "testimonial": "Absolutely exceptional! The pasta al tartufo was divine and the service impeccable. Amore Mio truly captures the essence of authentic Italian dining.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632253480-z2smemmf.jpg",
              "imageAlt": "Maria customer portrait"
            },
            {
              "id": "giovanni-review",
              "name": "Giovanni",
              "handle": "@giovanni_food",
              "testimonial": "As an Italian living in Milan, I can say this restaurant serves the most authentic flavors. The wine selection is outstanding and the ambiance perfect for special occasions.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632254176-y9g51c9a.jpg",
              "imageAlt": "Giovanni customer portrait"
            },
            {
              "id": "elena-review",
              "name": "Elena",
              "handle": "@elena_dines",
              "testimonial": "From the moment we walked in, we felt welcomed. The risotto was creamy perfection and the tiramisu was the best I've ever tasted. Highly recommend!",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632254718-axd1rwt2.jpg",
              "imageAlt": "Elena customer portrait"
            },
            {
              "id": "marco-review",
              "name": "Marco A.",
              "handle": "@marco_reviews",
              "testimonial": "The chef's tasting menu was an incredible journey through Italian cuisine. Each course was perfectly executed and beautifully presented. Worth every euro!",
              "icon": User
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          title="Reserve Your Table"
          description="Join us for an unforgettable dining experience. Book your table today and let us create magical moments for you."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763632247745-hre0tov6.jpg"
          imageAlt="Restaurant interior dining room"
          mediaPosition="left"
          inputPlaceholder="Your email address"
          buttonText="Make Reservation"
          termsText="By making a reservation, you agree to our dining policies and reservation terms."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Amore Mio"
          copyrightText="© 2025 | Amore Mio Ristorante, Milano"
          columns={[
            {
              "title": "Restaurant",
              "items": [
                {"label": "Menu", "href": "menu"},
                {"label": "Reservations", "href": "contact"},
                {"label": "Private Events", "href": "events"}
              ]
            },
            {
              "title": "About",
              "items": [
                {"label": "Our Story", "href": "about"},
                {"label": "Chef Team", "href": "team"},
                {"label": "Wine Selection", "href": "wines"}
              ]
            },
            {
              "title": "Contact",
              "items": [
                {"label": "Location", "href": "location"},
                {"label": "Hours", "href": "hours"},
                {"label": "Reviews", "href": "testimonials"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}