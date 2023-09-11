import Image from 'next/image';
const services = [
    {
      title: 'Web Design',
      datainjecturl: 'https://sandbox.elemisthemes.com/assets/img/icons/solid/pen-tool.svg',
      svgicon: '<g data-name="Layer 2"><path class="fill-primary" d="M162.62 162.53l17.14-27.87a10.65 10.65 0 00.8-9.6L137.89 20a10.68 10.68 0 00-19.78 0L75.44 125.06a10.71 10.71 0 00.8 9.6l17.14 27.87a18.56 18.56 0 00-9.2 13.68L74.74 247a7.94 7.94 0 007.93 9h90.67a8 8 0 007.92-9.07l-9.44-70.74a18.56 18.56 0 00-9.2-13.66zm-45.29-83.91v28.05a10.67 10.67 0 1021.34 0v-28l20.08 49.46L139.14 160h-22.29l-19.62-31.92z"></path><path class="fill-secondary" d="M248 0h-26.67a8 8 0 00-8 8v2.67H42.66V8a8 8 0 00-8-8H8a8 8 0 00-8 8v26.67a8 8 0 008 8h26.67a8 8 0 008-8V32h19.84a111.78 111.78 0 00-46.38 88.24 21.32 21.32 0 1021.33.13 90.58 90.58 0 01181.1 0 21.33 21.33 0 1021.33-.13A111.84 111.84 0 00193.5 32h19.84v2.67a8 8 0 008 8H248a8 8 0 008-8V8a8 8 0 00-8-8z"></path></g>',
      description: 'Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.',
    },
    {
      title: 'SEO Services',
      datainjecturl: 'https://sandbox.elemisthemes.com/assets/img/icons/solid/seo-2.svg',
      svgicon: '<path class="fill-primary" d="M194.67 48h-5.33a2.68 2.68 0 00-2.67 2.67v26.67a2.68 2.68 0 002.67 2.66h5.33a2.68 2.68 0 002.67-2.68V50.67a2.69 2.69 0 00-2.67-2.67z"></path><path class="fill-primary" d="M226.67 0H29.33A29.32 29.32 0 000 29.33v69.33a29.28 29.28 0 0017.6 26.88 41.68 41.68 0 0125.07-8.21A42.44 42.44 0 0170.83 128H82a53 53 0 0192 0h11.2a42.49 42.49 0 0128.16-10.67 41.81 41.81 0 0125.07 8.21A29.28 29.28 0 00256 98.66V29.33A29.32 29.32 0 00226.67 0zM61.76 56h4.48c10.56 0 19.09 9 19.09 20S76.8 96 66.24 96H50.67a8 8 0 010-16h15.57c1.71 0 3.09-1.81 3.09-4s-1.39-4-3.09-4h-4.48c-10.56 0-19.09-9-19.09-20s8.53-20 19.09-20h15.57a8 8 0 010 16H61.76c-1.71 0-3.09 1.81-3.09 4s1.38 4 3.09 4zm79.57 0a8 8 0 010 16h-18.67v5.33a2.64 2.64 0 002.67 2.67h16a8 8 0 010 16h-16a18.76 18.76 0 01-18.67-18.67V50.66A18.77 18.77 0 01125.33 32h16a8 8 0 110 16h-16a2.65 2.65 0 00-2.67 2.68V56zm72 21.33A18.76 18.76 0 01194.66 96h-5.33a18.76 18.76 0 01-18.67-18.67V50.66A18.77 18.77 0 01189.33 32h5.33a18.77 18.77 0 0118.67 18.68z"></path><circle class="fill-secondary" cx="42.67" cy="160" r="21.33"></circle><path class="fill-secondary" d="M71.15 196.27A44.71 44.71 0 0053.34 232v2.67H8a8.06 8.06 0 01-8-8v-5.33A29.32 29.32 0 0129.33 192H56a29.13 29.13 0 0115.15 4.27z"></path><circle class="fill-secondary" cx="213.33" cy="160" r="21.33"></circle><path class="fill-secondary" d="M256 221.33v5.33a8.07 8.07 0 01-8 8h-45.33V232a44.69 44.69 0 00-17.81-35.73A29.07 29.07 0 01200 192h26.67A29.32 29.32 0 01256 221.33z"></path><circle class="fill-secondary" cx="128" cy="154.67" r="32"></circle><path class="fill-secondary" d="M157.33 202.67H98.66A29.35 29.35 0 0069.33 232v16a8 8 0 008 8h101.33a8 8 0 008-8v-16a29.35 29.35 0 00-29.33-29.33z"></path>',
      description: 'Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.',
    },
    {
        title: 'E-commerce',
        datainjecturl: 'https://sandbox.elemisthemes.com/assets/img/icons/solid/shopping-basket.svg',
        svgicon: '<path class="fill-primary" d="M250.58 51.23A24.14 24.14 0 00232 42.7H24a24.11 24.11 0 00-18.54 8.53A23.31 23.31 0 00.34 70.11l28.8 166.4A23.87 23.87 0 0052.82 256h150.4a23.88 23.88 0 0023.68-19.52l28.8-166.4a23.37 23.37 0 00-5.12-18.88zM85.34 202.69a10.67 10.67 0 01-21.34 0V160a10.67 10.67 0 0121.34 0zm53.35 0a10.68 10.68 0 01-21.35 0V160a10.68 10.68 0 0121.35 0zm53.33 0a10.68 10.68 0 01-21.35 0V160a10.68 10.68 0 0121.33 0z"></path><path class="fill-secondary" d="M74.69 85.36a10.51 10.51 0 01-3.38-.56 10.65 10.65 0 01-6.73-13.49l21.32-64a10.66 10.66 0 1120.23 6.74l-21.33 64a10.65 10.65 0 01-10.11 7.31zm106.65 0a10.67 10.67 0 01-10.11-7.3l-21.33-64a10.66 10.66 0 1120.23-6.73l21.33 64a10.65 10.65 0 01-6.74 13.48 10.77 10.77 0 01-3.38.55z"></path>',
        description: 'Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.',
      },
      {
        title: 'Web Hosting',
        datainjecturl: 'https://sandbox.elemisthemes.com/assets/img/icons/solid/pen-tool.svg',
        svgicon: '<path class="fill-secondary" d="M250.58 126.14l-56-19a8 8 0 00-5.16 0l-56 19a8 8 0 00-5.42 7.57v42.87c0 52.32 58.38 77.72 60.88 78.8a8.19 8.19 0 003.12.62 7.85 7.85 0 003.12-.64c2.5-1.06 60.88-26.48 60.88-78.78v-42.87a8 8 0 00-5.42-7.57zm-23.52 40.45l-29.33 37.33a10.66 10.66 0 01-15.33 1.5l-18.67-16a10.66 10.66 0 0113.87-16.19l10.22 8.77 22.47-28.57a10.66 10.66 0 0116.77 13.18z"></path><path class="fill-primary" d="M202.67 0H32a32 32 0 000 64h170.67a32 32 0 000-64zM32 42.67A10.67 10.67 0 1142.67 32 10.67 10.67 0 0132 42.67zm42.67 0A10.67 10.67 0 1185.34 32a10.67 10.67 0 01-10.67 10.67zM32 85.33a32 32 0 000 64h74.67v-15.57a29.38 29.38 0 0120-27.84l55.89-19a29 29 0 019.49-1.6zM32 128a10.67 10.67 0 1110.67-10.67A10.7 10.7 0 0132 128zm42.67 0a10.67 10.67 0 1110.67-10.67A10.7 10.7 0 0174.67 128zm32 48.53v-5.87H32a32 32 0 000 64h95.68c-12.27-15.57-21.01-35.09-21.01-58.13zM32 213.33a10.67 10.67 0 1110.67-10.66A10.7 10.7 0 0132 213.33zm42.67 0a10.67 10.67 0 1110.67-10.66 10.7 10.7 0 01-10.67 10.66z"></path>',
        description: 'Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.',
      },
  ];

const ServiceSection = () => {
  return (
    <div className="container service-section">
    <div className="row">
      <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
        <h2 className="display-2 mb-4">The full service we are offering</h2>
        <p className="lead fs-lg mb-11">Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Integer posuere ante venenatis.</p>
      </div>
    </div>
    <div className="row gx-md-8 gy-8 text-center">
    {services.map((service) => (
          <div className="col-md-6 col-lg-3" key={service.title}>
            <div className="svg-bg svg-bg-lg bg-white rounded-xl shadow-xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" data-inject-url={service.datainjecturl} className="svg-inject icon-svg solid-duo text-grape-fuchsia"><g dangerouslySetInnerHTML={{ __html: service.svgicon }} /></svg>
            </div>
            <h3>{service.title}</h3>
            <p className="mb-3">{service.description}</p>
            <a href="#" className="more hover">Learn More</a>
          </div>
        ))}
    </div>
  </div>
  )
}

export default ServiceSection