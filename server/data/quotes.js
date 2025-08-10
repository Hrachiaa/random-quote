const quotes = [
  {
    id: '584454e3',
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    id: '7180d25f',
    text: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs',
  },
  {
    id: '3712260e',
    text: 'Your time is limited, so do not waste it living someone else is life.',
    author: 'Steve Jobs',
  },
  {
    id: 'e50e9380',
    text: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
  },
  {
    id: 'd890f828',
    text: 'Life is what happens when you’re busy making other plans.',
    author: 'John Lennon',
  },
  {
    id: '1504d682',
    text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    id: '7033121e',
    text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    id: '9f0977e5',
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    id: '552d0710',
    text: 'You miss 100% of the shots you don’t take.',
    author: 'Wayne Gretzky',
  },
  {
    id: '8b162f7d',
    text: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt',
  },
  {
    id: '13dfedc4',
    text: 'It always seems impossible until it’s done.',
    author: 'Nelson Mandela',
  },
  {
    id: '66a96555',
    text: 'The best way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    id: '98953b3a',
    text: 'Don’t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson',
  },
  {
    id: '27210ac1',
    text: 'The harder you work for something, the greater you’ll feel when you achieve it.',
    author: 'Unknown',
  },
  {
    id: '57d60133',
    text: 'Dream bigger. Do bigger.',
    author: 'Unknown',
  },
  {
    id: '3cb16603',
    text: 'Don’t stop when you’re tired. Stop when you’re done.',
    author: 'Marilyn Monroe',
  },
  {
    id: '840dfe36',
    text: 'Believe you can and you are halfway there.',
    author: 'Theodore Roosevelt',
  },
  {
    id: '4d48ca4a',
    text: 'Everything you’ve ever wanted is on the other side of fear.',
    author: 'George Addair',
  },
  {
    id: '18fa1745',
    text: 'Hardships often prepare ordinary people for an extraordinary destiny.',
    author: 'C.S. Lewis',
  },
  {
    id: '2311a198',
    text: 'Push yourself, because no one else is going to do it for you.',
    author: 'Unknown',
  },
  {
    id: '854408ad',
    text: 'Great things never come from comfort zones.',
    author: 'Unknown',
  },
  {
    id: '9f6692ad',
    text: 'Success doesn’t just find you. You have to go out and get it.',
    author: 'Unknown',
  },
  {
    id: '01187a9c',
    text: 'The key to success is to focus on goals, not obstacles.',
    author: 'Unknown',
  },
  {
    id: '5ab32523',
    text: 'Dream it. Wish it. Do it.',
    author: 'Unknown',
  },
  {
    id: '0bcd557c',
    text: 'Stay positive, work hard, make it happen.',
    author: 'Unknown',
  },
  {
    id: '3b97b2cd',
    text: 'Sometimes later becomes never. Do it now.',
    author: 'Unknown',
  },
  {
    id: '45b4402b',
    text: 'Don’t be afraid to give up the good to go for the great.',
    author: 'John D. Rockefeller',
  },
  {
    id: 'f94beab9',
    text: 'I find that the harder I work, the more luck I seem to have.',
    author: 'Thomas Jefferson',
  },
  {
    id: '085d0bc2',
    text: 'Success is walking from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    id: 'ccaef116',
    text: 'Opportunities do not happen. You create them.',
    author: 'Chris Grosser',
  },
  {
    id: '14d64158',
    text: 'Try not to become a man of success. Rather become a man of value.',
    author: 'Albert Einstein',
  },
  {
    id: 'b87bcbaf',
    text: 'Don’t let the fear of losing be greater than the excitement of winning.',
    author: 'Robert Kiyosaki',
  },
  {
    id: 'e36c2c80',
    text: 'If you are not willing to risk the usual, you will have to settle for the ordinary.',
    author: 'Jim Rohn',
  },
  {
    id: '647d43cd',
    text: 'The ones who are crazy enough to think they can change the world, are the ones that do.',
    author: 'Rob Siltanen',
  },
  {
    id: 'd6880ea7',
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    id: '70d76ff7',
    text: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    author: 'Zig Ziglar',
  },
  {
    id: '3855f4b4',
    text: 'You don’t have to be great to start, but you have to start to be great.',
    author: 'Zig Ziglar',
  },
  {
    id: '034904e3',
    text: 'I never dreamed about success. I worked for it.',
    author: 'Estee Lauder',
  },
  {
    id: 'f0aaa4ae',
    text: 'Don’t wish it were easier. Wish you were better.',
    author: 'Jim Rohn',
  },
  {
    id: 'dc1fce27',
    text: 'Hustle in silence and let your success make the noise.',
    author: 'Unknown',
  },
  {
    id: '909d7314',
    text: 'The secret of getting ahead is getting started.',
    author: 'Mark Twain',
  },
  {
    id: '098cc003',
    text: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    id: '96225729',
    text: 'The successful warrior is the average man, with laser-like focus.',
    author: 'Bruce Lee',
  },
  {
    id: '48c9294f',
    text: 'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',
    author: 'Dale Carnegie',
  },
  {
    id: '19046d6a',
    text: 'Action is the foundational key to all success.',
    author: 'Pablo Picasso',
  },
  {
    id: '9e2b3ff8',
    text: 'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    id: '8fb61dd6',
    text: 'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
    author: 'Roy T. Bennett',
  },
  {
    id: '3a3b345a',
    text: 'Everything you can imagine is real.',
    author: 'Pablo Picasso',
  },
  {
    id: '6a4be3b9',
    text: 'Whatever you are, be a good one.',
    author: 'Abraham Lincoln',
  },
  {
    id: '58d62b5f',
    text: 'You are never too old to set another goal or to dream a new dream.',
    author: 'C.S. Lewis',
  },
  {
    id: '6364ebe0',
    text: 'If you can dream it, you can do it.',
    author: 'Walt Disney',
  },
  {
    id: 'a453acdf',
    text: 'Turn your wounds into wisdom.',
    author: 'Oprah Winfrey',
  },
  {
    id: '5d03933a',
    text: 'Keep your face always toward the sunshine—and shadows will fall behind you.',
    author: 'Walt Whitman',
  },
  {
    id: '037af470',
    text: 'It’s not whether you get knocked down, it’s whether you get up.',
    author: 'Vince Lombardi',
  },
  {
    id: 'af719ae4',
    text: 'We may encounter many defeats but we must not be defeated.',
    author: 'Maya Angelou',
  },
  {
    id: '81a0a7c3',
    text: 'I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.',
    author: 'Jimmy Dean',
  },
  {
    id: '426cd11b',
    text: 'Perseverance is not a long race; it is many short races one after the other.',
    author: 'Walter Elliot',
  },
  {
    id: '39e921c2',
    text: 'Do not wait to strike till the iron is hot, but make it hot by striking.',
    author: 'William Butler Yeats',
  },
  {
    id: '9944aed8',
    text: 'If opportunity doesn’t knock, build a door.',
    author: 'Milton Berle',
  },
  {
    id: 'e91248f0',
    text: 'Don’t count the days, make the days count.',
    author: 'Muhammad Ali',
  },
  {
    id: '9df82382',
    text: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    id: 'c380b876',
    text: 'Act as if what you do makes a difference. It does.',
    author: 'William James',
  },
  {
    id: 'ecdc5cba',
    text: 'Quality is not an act, it is a habit.',
    author: 'Aristotle',
  },
  {
    id: 'f979aeb9',
    text: 'In order to succeed, we must first believe that we can.',
    author: 'Nikos Kazantzakis',
  },
  {
    id: '310f3212',
    text: 'Limit your always and your nevers.',
    author: 'Amy Poehler',
  },
  {
    id: 'eff20d2e',
    text: 'Nothing will work unless you do.',
    author: 'Maya Angelou',
  },
  {
    id: '17d4ad1d',
    text: 'We generate fears while we sit. We overcome them by action.',
    author: 'Dr. Henry Link',
  },
  {
    id: 'ad2f428d',
    text: 'Well done is better than well said.',
    author: 'Benjamin Franklin',
  },
  {
    id: 'c4b0aab6',
    text: 'If you want to lift yourself up, lift up someone else.',
    author: 'Booker T. Washington',
  },
  {
    id: 'e9c5e5e0',
    text: 'If you look at what you have in life, you’ll always have more.',
    author: 'Oprah Winfrey',
  },
  {
    id: '525b8c4f',
    text: 'It is never too late to be what you might have been.',
    author: 'George Eliot',
  },
  {
    id: '800ab60d',
    text: 'A person who never made a mistake never tried anything new.',
    author: 'Albert Einstein',
  },
  {
    id: '0fe2bfe6',
    text: 'You can waste your lives drawing lines. Or you can live your life crossing them.',
    author: 'Shonda Rhimes',
  },
  {
    id: '9d1d2184',
    text: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    id: '1ab74689',
    text: 'Everything has beauty, but not everyone can see it.',
    author: 'Confucius',
  },
  {
    id: '38362a29',
    text: 'If you tell the truth, you do not have to remember anything.',
    author: 'Mark Twain',
  },
  {
    id: '204c07c4',
    text: 'Do what you feel in your heart to be right  for you all be criticized anyway.',
    author: 'Eleanor Roosevelt',
  },
  {
    id: 'f75c88fd',
    text: 'Happiness is not something ready made. It comes from your own actions.',
    author: 'Dalai Lama',
  },
  {
    id: '7b818172',
    text: 'Peace begins with a smile.',
    author: 'Mother Teresa',
  },
  {
    id: 'ce93a203',
    text: 'In the middle of every difficulty lies opportunity.',
    author: 'Albert Einstein',
  },
  {
    id: 'c5daf67e',
    text: 'Love all, trust a few, do wrong to none.',
    author: 'William Shakespeare',
  },
  {
    id: '5c100b78',
    text: 'An unexamined life is not worth living.',
    author: 'Socrates',
  },
  {
    id: '913482f8',
    text: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    id: '2be37d06',
    text: 'The journey of a thousand miles begins with one step.',
    author: 'Lao Tzu',
  },
  {
    id: 'cd30d4bf',
    text: 'Change your thoughts and you change your world.',
    author: 'Norman Vincent Peale',
  },
  {
    id: '72b73bae',
    text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Ralph Waldo Emerson',
  },
  {
    id: '6ef31142',
    text: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama',
  },
  {
    id: 'abcf8252',
    text: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
  },
  {
    id: 'a6aaf5d3',
    text: 'To live is the rarest thing in the world. Most people exist, that is all.',
    author: 'Oscar Wilde',
  },
  {
    id: 'f196cda4',
    text: 'That which does not kill us makes us stronger.',
    author: 'Friedrich Nietzsche',
  },
  {
    id: 'fc68a9af',
    text: 'Injustice anywhere is a threat to justice everywhere.',
    author: 'Martin Luther King Jr.',
  },
  {
    id: '4b6052e8',
    text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  },
  {
    id: 'acef3f4f',
    text: 'A champion is defined not by their wins but by how they can recover when they fall.',
    author: 'Serena Williams',
  },
  {
    id: '48ca800f',
    text: 'It’s not the years in your life that count. It’s the life in your years.',
    author: 'Abraham Lincoln',
  },
  {
    id: 'e087dac6',
    text: 'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau',
  },
];

module.exports = quotes;
