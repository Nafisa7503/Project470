import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-factors',
  templateUrl: './weather-factors.component.html',
  styleUrls: ['./weather-factors.component.css']
})
export class WeatherFactorsComponent {
  weatherfactors = [
    {
      name: 'The Great Wall of China, Beijing, China',
      image: '/assets/Images/china.jpg',
      bestSeason: 'Spring (March-May) or Autumn (September-November) for comfortable temperatures and manageable crowds.',
      uvIndex: 'Moderate to High (3-8)',
      sunscreenSpf: 30,
      healthAdvice: 'Comfortable shoes are essential for uneven terrain. Stay hydrated, especially during warmer months.',
      uvIndexDescription: 'Sun protection is important, especially during midday when UV rays are strongest. Consider seeking shade during peak sun hours.',
      sunscreenDescription: 'Pack a hat and sunscreen (SPF 30+) for spring and summer visits. Be prepared for moderate to high UV index (3-8) depending on the season.'
    },
    // Add information for other places following the same format4
    {
      name: 'Taj Mahal, Agra, India',
      image: '/assets/Images/tajMahal.jpg',
      bestSeason: 'October to March for pleasant weather with cooler temperatures.',
      uvIndex: 'High (7-10) year-round',
      sunscreenSpf: 30,
      healthAdvice: 'Stay hydrated with bottled water and avoid midday sun exposure during peak summer months.',
      uvIndexDescription: 'Extreme sun protection is necessary due to the consistently high UV index.',
      sunscreenDescription: 'SPF 30+ (Broad-spectrum, sweat-resistant, reapply frequently)'
    },
    {
      name: 'Angkor Wat, Siem Reap, Cambodia',
      image: '/assets/Images/angkorWat.jpg',
      bestSeason: 'Dry season (November to April) for comfortable temperatures and less rain.',
      uvIndex: 'High (7-10) year-round',
      sunscreenSpf: 50,
      healthAdvice: 'Pack plenty of water for temple exploration. Consider using insect repellent for added comfort.',
      uvIndexDescription: 'Sun protection is essential throughout the year due to the high UV index..',
      sunscreenDescription: 'SPF 50+ (Water-resistant, broad-spectrum)'
    },
    {
      name: 'Mount Fuji, Fujiyoshida or Fujinomiya, Japan',
      image: '/assets/Images/mountFuji.jpg',
      bestSeason: 'July and August for the best chance of clear skies (expect crowds). Shoulder seasons (April-June & September-October) offer good weather with fewer crowds.',
      uvIndex: 'Moderate to High (5-8) depending on the season',
      sunscreenSpf: 30,
      healthAdvice: ' Dress in layers for varying temperatures. Sturdy shoes are recommended for hiking trails. Be mindful of potential wind gusts at the summit.',
      uvIndexDescription: 'Sun protection is important, especially during summer months when the UV index is higher. Be mindful of increased sun exposure at higher altitudes.',
      sunscreenDescription:  'SPF 30+ (Broad-spectrum)'
    },





  ];

  toggleInfo(infoId: string) {
    const infoElement = document.getElementById(infoId);
    infoElement?.classList.toggle('show'); // Optional chaining to handle potential null
  }
}
