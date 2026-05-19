export default async function handler(req, res) {                                                                                                                                        
    const ua = (req.headers['user-agent'] || '').toLowerCase();                                                                                                                            
    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();
                                                                                                                                                                                           
    const botUAs = [
      'facebookexternalhit', 'facebot', 'facebookbot',                                                                                                                                     
      'adsbot', 'googlebot', 'bingbot', 'twitterbot',                                                                                                                                    
      'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',                                                                                                                                
      'crawler', 'spider', 'headless', 'phantom', 'python',
      'curl', 'wget', 'java/', 'apache-httpclient'                                                                                                                                         
    ];                                                                                                                                                                                   
                                                                                                                                                                                           
    const metaIPs = [                                                                                                                                                                    
      '66.220.', '69.63.', '69.171.', '173.252.',
      '31.13.', '157.240.', '179.60.', '204.15.'                                                                                                                                           
    ];
                                                                                                                                                                                           
    const isBot = botUAs.some(b => ua.includes(b));                                                                                                                                      
    const isMeta = metaIPs.some(r => ip.startsWith(r));
                                                                                                                                                                                           
    if (isBot || isMeta) {
      res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' });                                                                                                     
      res.end();                                                                                                                                                                           
      return;
    }                                                                                                                                                                                      
                                                                                                                                                                                         
    const links = [
      // Adriano - Dia 01
      'https://chat.whatsapp.com/Bto8VAr36cvLgQPBgCHYX1', // 01
      'https://chat.whatsapp.com/Il6k8YO0J467BnSa14LhZO', // 02
      // Adriano - Dia 02
      //'https://chat.whatsapp.com/KTIV7fmxxsGFEHns5p3zTq', // 03
      //'https://chat.whatsapp.com/Ho3DCgKIhztAi6902uqbCc', // 04
      // Adriano - Dia 03
      //'https://chat.whatsapp.com/HHdJVe1vYRzBNGxCV3n376', // 05
      //'https://chat.whatsapp.com/DZKrprJ2z4rL1TUnXqm1UM', // 06

      // João - Dia 01
      'https://chat.whatsapp.com/G0WiEKvY0V5JUUVYwNQybh', // 11
      'https://chat.whatsapp.com/FrZ2WDrA2xREEbM5jDkwqY', // 12
      // João - Dia 02
      //'https://chat.whatsapp.com/ESVneZ14qiPLLi38TQhasz', // 13
      //'https://chat.whatsapp.com/JnbJMfDffrZDVUbNf4zNlu', // 14
      // João - Dia 03
      //'https://chat.whatsapp.com/INddlJqtUvL4IXc2mpNIFn', // 15
      //'https://chat.whatsapp.com/LZpweYFPnRXBpAs06JSccW', // 16
    ];                                                                                                                                                                                     
                                                                                                                                                                                         
    const link = links[Math.floor(Math.random() * links.length)];                                                                                                                          
                                                                                                                                                                                         
    res.writeHead(302, { Location: link });                                                                                                                                                
    res.end();                                                                                                                                                                           
  }
