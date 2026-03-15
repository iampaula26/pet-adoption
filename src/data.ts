export type AnimalType = 'dog' | 'cat';

export interface Animal {
  id: string;
  type: AnimalType;
  name: string;
  breed: string;
  age: string;
  gender: 'Male' | 'Female';
  personality: string;
  health: string;
  images: string[];
}

export const animals: Animal[] = [
  {
    id: '1',
    type: 'dog',
    name: 'Bella',
    breed: '黃金獵犬 (Golden Retriever)',
    age: '2 歲',
    gender: 'Female',
    personality: '非常友善、充滿活力，喜歡玩丟接球和游泳。對人類和其他狗狗都很熱情。',
    health: '已施打疫苗，已結紮，身體非常健康。',
    images: [
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1537151608804-ea6f11840eb3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '2',
    type: 'cat',
    name: 'Oliver',
    breed: '英國短毛貓 (British Shorthair)',
    age: '3 歲',
    gender: 'Male',
    personality: '個性冷靜、親人，喜歡在窗邊曬太陽睡午覺。偶爾會撒嬌討摸摸。',
    health: '已施打疫苗，已結紮，健康狀況良好。',
    images: [
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '3',
    type: 'dog',
    name: 'Max',
    breed: '米格魯混血 (Beagle Mix)',
    age: '1 歲',
    gender: 'Male',
    personality: '好奇心旺盛、愛玩，跟小孩和其他狗狗都相處得很好。需要較大的活動空間。',
    health: '已施打疫苗，已結紮，已植入晶片。',
    images: [
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '4',
    type: 'cat',
    name: 'Luna',
    breed: '暹羅貓 (Siamese)',
    age: '4 個月',
    gender: 'Female',
    personality: '很愛講話、愛玩，非常黏人，喜歡跟著主人走來走去。',
    health: '已施打第一劑疫苗，已驅蟲。',
    images: [
      'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '5',
    type: 'dog',
    name: 'Charlie',
    breed: '柯基犬 (Corgi)',
    age: '4 歲',
    gender: 'Male',
    personality: '聰明，稍微有點固執但非常忠誠愛家。喜歡散步和吃零食。',
    health: '已施打疫苗，已結紮，需要注意體重控制。',
    images: [
      'https://images.unsplash.com/photo-1519098901909-b1553a1190af?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '6',
    type: 'cat',
    name: 'Milo',
    breed: '米克斯 (Domestic Shorthair)',
    age: '2 歲',
    gender: 'Male',
    personality: '個性獨立但晚上喜歡窩在人腿上睡覺。是個很棒的捕鼠小幫手。',
    health: '已施打疫苗，已結紮，非常健康。',
    images: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=800'
    ]
  }
];
