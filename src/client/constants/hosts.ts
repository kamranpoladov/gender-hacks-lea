import { createRef } from 'react';
import { HostTags } from '../../types';
import {
  Afro,
  Bun,
  Short
} from '../components/HostsList/components/profilePictures';

export const HOSTS_AMOUNT = 10;

export const hostNames = [
  'Mələk Tağızadə',
  'Ayşən Orucova',
  'Aysel Axundova',
  'Nərmin Abbaslı',
  'Lalə Mahmudlu',
  'Mətanət Rəhimova',
  'Səkinə Hüseynli',
  'Aişə Xəlilova',
  'Leyla Həsənzadə',
  'Jalə Paşayeva'
];
export const hostProfilePictures = [Bun, Short, Afro];
export const hostProfileColors = ['#BED7AA', '#E0BBE1', '#C0CEFF'];

export const hostTags: HostTags[][] = [
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY, HostTags.ONE_WEEK],
  [HostTags.WIFI, HostTags.SINGLE_ROOM, HostTags.ONE_WEEK],
  [HostTags.KID_FRIENDLY, HostTags.WIFI, HostTags.TWO_WEEKS],
  [HostTags.SINGLE_ROOM, HostTags.PET_FRIENDLY, HostTags.ONE_WEEK],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY, HostTags.TWO_WEEKS],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY, HostTags.TWO_WEEKS],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY, HostTags.TWO_WEEKS],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY, HostTags.TWO_WEEKS],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY, HostTags.TWO_WEEKS],
  [HostTags.KID_FRIENDLY, HostTags.PET_FRIENDLY, HostTags.TWO_WEEKS]
];

export const hostDescriptions: string[] = [
  'Hamını xoş gördük! 32 yaşım var, təcili sığınacağa ehtiyacı olan hər kəsə evimin qapısını açmağa hazıram. Yoga və meditasiya ilə məşğul olmağı sevirəm, indi sizin üçü vacib olduğuna əmin olduğum daxili sülh və sakitliyi geri qaytarmağa kömək edən bu fəaliyyətlə birlikdə məşğul ola bilərik. Sizinlə görüşməyi səbirsizliklə gözləyirəm! Qaldığınız yerin rahat və təhlükəsiz olması üçün əlimdən gələni edəcəyəm. Gizli qalmaq istədiyiniz hər şeyi bölüşməkdən çəkinməyin və beş il əvvəl bütün bunları aşan və indi öz kiçik şirkətinə rəhbərlik edən bir qadının məsləhətini istəyin (spoyler: həmən bu qadın mənəm ✿◠‿◠)',
  'Salamlar! Mənim 23 yaşım var, hamı ilə asanlıqla ünsiyyət quran bir insanam. Vaxtımın çox hissəsini interyer dizaynı ilə məşğul olaraq keçirirəm. Dostlarım məni enerjili, dəstəkləyən və nikbin biri kimi xarakterizə edirlər, həqiqətən də ünsiyyət qurmaq və paylaşmaq istəyən hər kəsə açıqam. Çox vaxt diqqətli və düşüncəli olmağıma görə də təriflənirəm. Mənzilim böyük deyil, amma qonaq otağındakı divanla paylaşa bilərəm. Ev heyvanlarınızı da gətirməkdən çəkinməyin - pişiyim Şans və köpəyim Max yeni dostları sevir 🙂',
  'Salam! İş rəfiqəm məişət zorakılığının qurbanı olduqdan sonra burada bir hesab yaratmağı qərara aldım. Qurtarılmaq arzusunda olan və ya dəstək çağıran hər kəsə kömək etməyə hazıram. Əslində, tam zamanlı Lea üzvü olmağa qərar verməyimin səbəbi budur. Ümumiyyətlə, mən pozitiv münasibət saxlayıram və həyatdan çox zövq alıram. Hamımız bir qısa ömür verilirik və dünyada yaşayan hər kəsin bu həyatı ən yaxşı şəkildə keçirməsini istəyirəm, buna görə də bütün zorakı insanları keçmişdə qoyaraq həyatında yeni bir səhifə açmaq istəyən hər kəsi qəbul etməyə şadam.',
  'Hamıya salam, mən 47 yaşlı subay bir anayam. Övladlarım bu yaxınlarda köçüb getdikləri üçün çətin anları yaşayan qadınlara ehtiyac duyduqları müddətdə qalmaq üçün etibarlı bir yer təklif edərək onlara dəstək olmağı qərara aldım. Unutmayın ki, həyat böyük bir çətinlikdir və daha yaxşı günlər yaşayacaqsınız, amma hələlik təsdiq edilmişdir bir psixoloq olaraq, yaşadıqlarını bölüşməyə ehtiyacı olan hər kəs üçün mənzilimin qapısı açıqdır və evimin sizin üçün təhlükəsiz bir yer olacağından əmin ola bilərsiniz.',
  'Salamlar! Təcili qaçmağa yer və xilas olmağa ehtiyacı olan hər kəsə xoş gəlmisiniz deyirəm! Bacımla yaşadığımız böyük bir evimizdə istifadə edə biləcəyiniz və özünüzü evdə kimi hiss edə biləcəyiniz boş yataq otağımız var. Bununla yanaşı, mən bir az introvertəm, buna görə də Sizinlə çox danışmasam, bunun Sizin üzünüzdən olduğunu düşünməyin, hər kəsin özü ilə tək qalması üçün zamana ehtiyacı var =) Buna əlavə olaraq, bacım sosial dəstək mərkəzində işləyir və dəqiqliklə deyə bilərəm ki, Sizə kömək edə biləcək ən uyğun gələn insandır!',
  'Hər vaxtınız xeyir, dünyanın ən gözəl insanları! Universitetdə sosiologiya və hüquq sahələri üzrə müəllim işləyirəm. Günümün çox hissəsini işdə keçirməyimə baxmayaraq, sizi mənzilimdə təhlükəsizlikdə saxlaya bilərəm. Anamla birlikdə yaşayıram, ona görə mən evdə olmayanda o, sizə darıxmağı qoymayacaq =)',
  'Vaxtınız xeyirli olsun! Bizim ailəmizin hal-hazırda boş olduğu ikinci evimiz var - kirayə verməməyə qərara gəldik. Sizi həmin evdə qəbul etməyə xoş olardım! Ehtiyacı olan hər bir kəs mənə yaza bilər, özünüzlər uşaq və ev heyvanlarını gətirməkdən utanmayın - onları da Sizinlə birlikdə xilas edək!',
  'Əziz Lea cəmiyyətinin iştirakçıları, hamını salamlayıram. Mənim 23 yaşım var, evli deyiləm, bacımla valideyinlərimizdən ayrı yaşayırıq. Psixologiya fakültəsini bitirmiş bir insan kimi Sizi nəinki təhlükəz evdə qəbul etmək, hətta psixoloji dəstək verməyə də şad olardım! Mənə yazıb danışmaqdan çəkinməyin)',
  'Salamlar! Bir neçə il əvvəl özüm evdən dostlarımgilə qaçaraq həyatımı qurtara bildim. Ondan sonra yeni həyat başladı - iş, sevimli adama və sevən ailə, uşaqlar, ailəvi istirahətlər və s. Sizin də həyatınızı biz xilas etməliyik. Heç bir qadın məişət zorakılığına dözməməlidir. Sizi öz evimdə qəbul etməyə xoş olardı! Həyatınızı dəyişmək heç vaxt gec deyil!',
  'Salamlar! Mənim 23 yaşım var, hamı ilə asanlıqla ünsiyyət quran bir insanam. Vaxtımın çox hissəsini interyer dizaynı ilə məşğul olaraq keçirirəm. Dostlarım məni enerjili, dəstəkləyən və nikbin biri kimi xarakterizə edirlər, həqiqətən də ünsiyyət qurmaq və paylaşmaq istəyən hər kəsə açıqam. Çox vaxt diqqətli və düşüncəli olmağıma görə də təriflənirəm. Mənzilim böyük deyil, amma qonaq otağındakı divanla paylaşa bilərəm. Ev heyvanlarınızı da gətirməkdən çəkinməyin - pişiyim Şans və köpəyim Max yeni dostları sevir 🙂'
];

export const hostsRefs = Array(HOSTS_AMOUNT)
  .fill(0)
  .map(() => createRef<HTMLInputElement>());
