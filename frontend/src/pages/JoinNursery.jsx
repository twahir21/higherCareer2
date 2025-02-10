import "../styles/joinNursery.css";

const JoinNursery = () => {
  return (
    <div>
    <div className="joining-container">

        <div className="joining-titles">
            <h2><i className="fas fa-school"></i>FOMU YA KUJIUNGA NA SKULI YA MSINGI (NURSERY) MWAKA 2025-2026</h2>
            <h3><i className="fas fa-info-circle"></i>MAELEKEZO</h3>
            <p className="joining-text">Tumia herufi kubwa TU kujaza fomu hii. Hakikisha kila sehemu imejazwa kiukamilifu</p>
        </div>

        <ol className="all-details">

            <div className="maelezo_binafsi page" id="page-1">
                <li className="sub-title"><i className="fas fa-user"></i>MAELEZO BINAFSI:</li>

                {/* <!-- Form 1 --> */}
                <form action="#" id="form-1">
                    <label htmlFor="student_name">
                        JINA LA MWANAFUNZI:
                        <input type="text" id="student_name" name="student_name" required/>  
                    </label>

                    <label htmlFor="birth_date">
                        TAREHE YAKUZALIWA:
                        <input type="date" id="birth_date" name="birth_date" required />
                    </label>

                    <label htmlFor="gender">
                        JINSIA:
                        <input type="radio" name="gender" value="M/ME" id="gender_male" /><span className="gender">M/ME</span>
                        <input type="radio" name="gender" value="M/KE" id="gender_female" /><span className="gender">M/KE</span>
                    </label>

                    <label htmlFor="school_name">
                        JINA LA SKULI ANAYOTOKA MWANAFUNZI: 
                        <input type="text" id="school_name" name="school_name" required />
                    </label>

                    <label htmlFor="join_year">
                        MWAKA ALIOJIUNGA NA SKULI HIYO: 
                        <input type="text" id="join_year" name="join_year" required />
                    </label>

                    <label htmlFor="className">
                        DARASA ALILOFIKA:
                        <input type="text" id="className" name="className" required />
                    </label>
                </form>
            </div>

            <div className="taarifa_mzazi page" id="page-2">
                <li className="sub-title">TAARIFA ZA MZAZI/MLEZI:</li>
                {/* <!-- Form 2 --> */}
                <form action="#" id="form-2">
                    <label htmlFor="parent_name">
                        JINA KAMILI LA MZAZI/MLEZI:
                        <input type="text" id="parent_name" name="parent_name" required />
                    </label>

                    <label htmlFor="home">
                        MAHALA ANAPOISHI MZAZI: 
                        <input type="text" id="home" name="home" required />
                    </label>

                    <label htmlFor="house_no">
                        NAMBARI YA NYUMBA:
                        <input type="text" id="house_no" name="house_no" required />
                    </label>

                    <label htmlFor="phone">
                        NAMBARI YA SIMU YA MZAZI:
                        <input type="text" id="phone" name="phone" required />
                    </label>

                    <label htmlFor="optional_1">
                        AU (sio lazima):
                        <input type="text" id="optional_1" name="phone_optional" />
                    </label>

                    <label htmlFor="optional_2">
                        AU (sio lazima):
                        <input type="text" id="optional_2" name="phone_optional_2" />
                    </label>

                    <label htmlFor="date">
                        TAREHE YA KUJAZA FOMU:
                        <input type="date" id="fill_date" name="date" required />
                    </label>

                    <label htmlFor="submit_date">
                        TAREHE YA KUTUMA FOMU:
                        <input type="date" id="submit_date" name="date_submitted" required />
                    </label>
                </form>

            </div>

            <div className="ada page" id="page-3">
                <li className="sub-title">ADA YA SKULI NA TARATIBU ZA MALIPO</li>
                <ol type="a">
    
                   <li>Mwanafunzi kujiunga na skuli ni lazima akubali na afuate taratibu na masharti yote yaliyoainishwa kwenye hii fomu.</li> 
                    <li>Mzazi/Mlezi ni lazima ajaze fomu kwa ukamilifu asiache hata kipengele kimoja.</li>
                    <li>Fomu inatakiwa iambatanishwe na vitu vifuatavyo
                        <ul style="list-style-type: disc;">
                            <li>Kivuli cha cheti cha kuzaliwa</li>
                            <li>Picha mbili a paspoti saizi</li>
                            <li>barua ya uhamisho ya skuli aliyotoka</li>
                            <li>Kadi ya maendeleo ya shule anayotoka</li>
                        </ul>
                    </li>
    
                    <li>Usajili wa Mwanafunzi
                        <ul style="list-style-type: lower-roman;">
                            <li>Ada ya  kuchukua fomu ni Tsh 5,000/= haitorejeshwa</li>
                            <li>Ada ya Usajili wa skuli ni Tsh 30,000/= haitarejeshwa</li>
                            <li>Fulana Tsh 15,000/=</li>
                            <li>Vipimo vya afya 20,000/=</li>
                            <li>Ada ya chuo kwa mwezi ni Tsh 30,000/= italipwa miezi mitatu mitatu (Tsh 90,000/=)</li>
                            <li>Ada ya Usafiri inatozwa kulingana na sehemu anayoishi mwanaunzi husika</li>
                            <li>Ada ya Mahafali ni Tsh 20,000/= na safari ya kimasomo ni Tsh 20,000/=</li>
                        </ul>
                    </li>
    
                    <li>Ada ya masomo kwa mihula miwili  ni shs 480,000/=</li>
                    <li>Mzazi/Mlezi atatakiwa kulipa kwa utaratibu ufuatao:-
                        <ul style="list-style-type: lower-roman;">
                            <li>Kulipa mihula yote miwili kwa pamoja AU</li>           
                            <li>Mara mbili kwa muhula yaani Tsh 280, 000/= kwa kila mwanzo wa muhula na zilizobakia atamalizia muhula wa Pili  (Tsh. 200,000/=) AU</li>
                            <li>Asilimia 70% sawa na Tsh 196,000/= kwa kila mwanzo wa muhula na atamalizia asilimia 30 (Tsh 84,000/=) iliobaki katikati ya muhula.</li>
                            <li>Asilimia 70% sawa na Tsh 140,000/= kwa kila mwanzo wa muhula wa pili na atamalizia asilimia 30 Tsh 60,000/= iliobaki katikati ya muhula.</li>
                        </ul>
                    </li>
    
                    <li>Malipo yote yafanywe kupitia benki ya Kiislamu ya PBZ kwa akaunti namba 0726551001 JINA: AB HIGHER CAREER ACADEMIC LTD na kuwasilisha fomu ya malipo (Pay slip) katika ofisi yetu kwa ajili ya kupatiwa risiti 
                        N.B. HAKUNA MALIPO YOYOTE YATAKAYOPOKELEWA SKULI.</li>
                    
                    <li>Mzazi/Mlezi wa mwanafunzi anatakiwa awasilishe vifaa vifuatavyo:-
    

             
                        <table className="tools">
                            <tr className="tr">
                                <th className="th">S/No.</th>
                                <th className="th">VIFAA</th>
                                <th className="th">IDADI (BABY)</th>
                                <th className="th">IDADI (KG1 - KG2)</th>
                            </tr>
    
                            <tr className="tr">
                                <td className="td">1</td>
                                <td className="td">MADAFTARI YA MISTARI Pg 200</td>
                                <td className="td">9</td>
                                <td className="td">7</td>
                            </tr>

                            <tr className="tr">
                                <td className="td">2</td>
                                <td className="td">MADAFTARI YA VYUMBA Pg 200</td>
                                <td className="td">2</td>
                                <td className="td">2</td>
                            </tr>

                            <tr className="tr">
                                <td className="td">3</td>
                                <td className="td">MADAFTARI YASIO YA MISTARI Pg 200</td>
                                <td className="td">1</td>
                                <td className="td">1</td>
                            </tr>

                            <tr className="tr">
                                <td className="td">4</td>
                                <td className="td">PENSELI</td>
                                <td className="td">BOX 3</td>
                                <td className="td">BOX 3</td>
                            </tr>

                            <tr className="tr">
                                <td className="td">5</td>
                                <td className="td">RABA</td>
                                <td className="td">5</td>
                                <td className="td">5</td>
                            </tr>

                            <tr className="tr">
                                <td className="td">6</td>
                                <td className="td">RANGI KAVU</td>
                                <td className="td">BOX 1</td>
                                <td className="td">BOX 1</td>
                            </tr>

                            <tr className="tr">
                                <td className="td">7</td>
                                <td className="td">RANGI ZA MAJI</td>
                                <td className="td">BOX 1</td>
                                <td className="td">BOX1</td>
                            </tr>

                            <tr className="tr">
                                <td className="td">8</td>
                                <td className="td">KAVA LA MADAFTARI</td>
                                <td className="td">2</td>
                                <td className="td">2</td>
                            </tr>

                            <tr className="tr">
                                <td className="td">9</td>
                                <td className="td">VICHONGEO</td>
                                <td className="td">5</td>
                                <td className="td">5</td>
                            </tr>

                            <tr className="tr">
                                <td className="td">10</td>
                                <td className="td">RIMU/KARATASI</td>
                                <td className="td">1</td>
                                <td className="td">1</td>
                            </tr>
                        </table>
                    </li>
    
                    <li>Mzazi/Mlezi ataependa kulipa ada ya mwaka mzima kwa mara moja anaruhusiwa kulipa mwanzo wa mwaka na sio kati wala mwisho wa mwaka.</li>
                    <li>Mzazi analazimika kuitikia wito wa skuli anapoitwa</li>
                    <li>Mwanafunzi yeyote hatoruhusiwa kufanya mtihani wake wa muhula ikiwa hajakamilisha malipo yake yote ya muhula huo.</li>
                    <li>Baada ya ada kulipwa haitorejeshwa kwa sababu ya kumuhamisha mwanafunzi au sababu nyengine yeyote.</li>
                    <li>Skuli itatoa masomo yafuatayo kwa darasa la kwanza hadi la saba.</li>
                </ol>
            </div>

            <div className="masomo page" id="page-4">
                <li className="sub-title">MASOMO YALIYOMO</li>
                <p>Na masomo yote yatasomeshwa kwa lugha ya kingereza isipokuwa masomo ya lugha ya Kiswahili, Kiarabu, Elimu ya dini ya kiislam kulingana na darasa alilokuwepo. Masomo yatakayosomeshwa ni:-</p>
                <ol>
                    <li>Kiswahili</li>
                    <li>Mathematics</li>
                    <li>English</li>
                    <li>Envrionment</li>
                    <li>Dini</li>
                    <li>C.A.S.</li>
                </ol>
            </div>

            <div className="fomu-mzazi page" id="page-5">
                <li className="sub-title">SEHEMU HII INATAKIWA KUJAZWA NA MLEZI / MZAZI:</li>
                {/* <!-- Form 3 --> */}
                <form action="#" id="form-3">
                    <label htmlFor="form3_name">Mimi,
                        <input type="text" id="form3_name" name="parent_name" required />
                    </label>

                    <label htmlFor="form3_student_name">
                        Mzazi/Mlezi wa:
                        <input type="text" id="form3_student_name" name="student_name" required />
                    </label>

                    <label htmlFor="explanations">
                        Naahidi kwamba, nitalipa Ada zote husika kwa wakati, aidha, naahidi kufuata taratibu zote na kanuni za skuli ya Higher Career Academy pamoja na kuhakikisha kwamba mtoto wangu atahudhuria masomo kwa wakati na nitawajibika kwa kosa lolote la kinidhamu.
                        <input type="text" name="explanations" required />
                    </label>

                    <label htmlFor="form3_parent_name" className="footer_name">
                        <input type="text" id="form3_parent_name" name="parent_name" required />
                        JINA LA MZAZI
                    </label>

                    <label htmlFor="signature" className="footer_sign">
                        <div className="signature-container">
                            <canvas id="signature-pad"></canvas>
                            <div className="sahihi">SAHIHI</div>
                            <div className="button">
                                <button id="clear-button">Futa</button>
                                <button id="save-button">Hifadhi</button>
                            </div>
                        </div>
                    </label>

                    <label htmlFor="form3_date" className="footer_date">
                        <input type="date" id="form3_date" name="date" required />
                        TAREHE
                    </label>

                    <label htmlFor="NB:" className="nb">
                        NB:  MALIPO YOTE YALIPWE ISLAMIC BANK PBZ ACCONT NO: 0726551001 JINA: AB HIGHER CAREER ACADEMIC LTD
                    </label>
                </form>

            </div>

            <div className="sheria_skuli page" id="page-6">
                <li className="sub-title">MASHARTI NA SHERIA ZA SKULI</li>
                
                <p>Kila Mzazi/Mlezi/Mwanafunzi atalazimika kuzifuata na kuzitii sheria na masharti ya skuli:-</p>
                <ol>
            <li className="mini-title">MASOMO NA MITIHANI
                <ol type="a">
                    <li>Mwanafunzi atalazimika kufanya vyema masomo yake pamoja na kuandika na kufanya kazi zote za darasani na nyumbani ( H/W)</li>
                    <li>Mwanafunzi atalazimika kufanya majaribio yote ya mwezi.</li>
                    <li>Mwanafunzi atatakiwa kufanya mitihani kwa wakati uliopangwa.</li>
                    <li>Mwanafunzi hatakiwi kufanya udanganyifu katika mitihani.</li>
                </ol>
            </li>
        
            <li className="mini-title">Mwanafunzi haruhusiwi kuyafanya yafuatayo:-
                <ol>
                    <li>Utoro</li>
                    <li>Kutoandika darasani</li>
                    <li>Kutofanya kazi ya nyumbani na darasani</li>
                    <li>Kutodurusu masomo yake nyumbani</li>
                </ol>
            </li>
        
            <li className="mini-title">Endapo hatotimiza yaliotajwa hapo juu adhabu ni:-
                <ol>
                    <li>Kuonywa</li>
                    <li>kupewa adhabu na mwalimu</li>
                    <li>kurudishwa nyumbani</li>
                    <li>kuitwa mzazi</li>
                </ol>
            </li>
        
            <li className="mini-title">Mwanafunzi atarudishwa nyumbani/kuitwa mzazi endapo ataendelea kua sugu na moja ya mambo yaliorodheshwa hapo juu.</li>
        
            <li className="mini-title">SARE ZA SKULI </li>
            <ol type="i" className="nested-ol-joining">
                <li>Mwanafunzi atalazimika kuvaa sare maalum zilizopangwa na skuli na anawajibu wakulipiwa gharama zote za sare na Mzazi/Mlezi wake.</li>
                <li>Wanafunzi wa kiume wanatakiwa wavae suruali ya bluu (isiburutike) shati ya blue na viatu vya kuvika (veusi) na soksi nyeupe pamoja na mkanda mweusi</li>
                <li>Wanafunzi wa kike watatakiwa wavae shati ya blue na sketi ya blu shungi la blue na viatu vya kuvika rangi nyeusi  na soksi nyeupe.</li>
                <li>Mwanafunzi atatakiwa kuvaa sare inayokubalika na skuli, kutovaliwa sehemu moja tu ya sare kama vile aina ya viatu au rangi isiyokubalika, mwanafunzi hatoruhusiwa kuingia darasani</li>
            </ol>
        
            <li className="mini-title">MUDA WA KUFIKA SKULI</li>
            <ol type="i" className="nested-ol-joining">
                <li>Mzazi /Mlezi ahakikishe kijana wake amefika skuli saa 12:45 za asubuhi.</li>
                <li>Endapo akachelewa adhabu ni kama ifuatavyo:-</li>
                <ol className="sub-nested-ol-joining">
                    <li>Kuonywa</li>
                    <li>Kurudishwa nyumbani</li>
                    <li>kuitwa mzazi</li>
                </ol>
            </ol>
        
            <li className="mini-title">USAFI</li>
            <ol type="i" className="nested-ol-joining">
                <li>Mwanafunzi anapaswa kutunza usafi wa mazingira yote ya skuli.</li>
                <li>Mwanafunzi anatakiwa awe msafi kuanzia Nguo/sare, mwili, madaftari na mkoba</li>
                <li>Endapo atakuja skuli si msafi adhabu ni kama ifuatavyo:-</li>
                <ol className="sub-nested-ol-joining">
                    <li>Kupewa adhabu na mwalimu</li>
                    <li>Kuonywa</li>
                    <li>Kurudishwa nyumbani</li>
                    <li>Kuitwa mzazi</li>
                </ol>
            </ol>
        
            <li className="mini-title">NIDHAMU</li>
            <ol type="i" className="nested-ol-joining">
                <li>Ni lazima mwanafunzi awe na nidhamu na atii kanuni na sheria zote za skuli, kuacha kufuata sheria za skuli kunaweza kumpelekea kufukuzwa skuli.</li>
                <li>Pia mwanafunzi aweke heshima kwa walimu, wafanyakazi na wanafunzi wenzake.</li>
                <li>Mwanafunzi huruhusiwi kufanya yafuatayo:-</li>
                <ol className="sub-nested-ol-joining">
                    <li>Wizi wa aina yoyote</li>
                    <li>Kupigana</li>
                    <li>Kutumia lugha za matusi</li>
                    <li>Kuharibu mali za skuli</li>
                </ol>
                <li>Endapo atafanya yaliorodheshwa hapo juu adhabu ni kama ifuatavyo:-</li>
                <ol className="sub-nested-ol-joining">
                    <li>Kuonywa</li>
                    <li>kupewa adhabu</li>
                    <li>kurudishwa nyumbani</li>
                    <li>kuitwa kwa mzazi</li>
                    <li>kulipa mali ya skuli</li>
                </ol>
            </ol>
        
            <li className="mini-title">MENGINEYO</li>
            <ol type="i" className="nested-ol-joining">
                <li>Mzazi/Mlezi atalazimika kufuatilia maendeleo ya mwanafunzi kila mwezi pamoja na kutoa ushirikiano kwa pale panapojitokeza dharura ya msingi itakayomfanya mwanafunzi ashindwe kuhudhuria skuli basi mzazi/ mlezi atalazimika kutoa taarifa mapema iwezekanavyo.</li>
                <li>Mzazi/Mlezi analazimika kuitikia wito wa skuli anapoitwa na kushiriki vikao vyote vitakavyoitishwa na uongozi wa skuli.</li>
                <li>Mwanafunzi watakaohitaji usafiri ni lazima wafanye malipo kwa wakati ili kuepusha usumbufu wa huduma hiyo.</li>
                <li>Mwanafunzi anaehitaji Madrassa utaratibu wa malipo ni ule wa miezi mitatu mitatu na malipo yote yanafanyika benki, gharama za madrasa zimeorodheswa kwenye mchanganuo wa malipo.</li>
                <li>Mwanafunzi ni lazima afanyiwe vipimo vya afya kabla ya kuanza masomo na vipimo akafanyiwe skuli.</li>
                <li>Mwanafunzi atatakiwa kufanya kazi zote za darasani atakazopewa na walimu.</li>
                <li>Ni marufuku kuja na simu skuli, simu  yoyote  itakayokamatwa itahifadhiwa na uongozi wa skuli kwa muda wa miezi sita, ndipo atakabidhiwa mzazi wa mwanafunzi. Halitokuwa ni jukumu la skuli kwa kufa au kuharibika kwa simu hiyo.</li>
        
                <li>Mzazi atatakiwa kutoa taarifa halisi za kijana wake, kama vile ugonjwa mkubwa au ulemavu wa viungo na kadhalika.</li>
        
                <li>Nywele kubwa na mikato ya kiajabu ajabu haitoruhusika kwa mwanafunzi yoyote wa kiume kwa muda wake wote wa masomo ndani ya shule</li>
        
                <li>Mtindo wa nywele unaoruhusika ni nywele ndogo staili ya mchicha zilizokatwa sawa sawa kichwa kizima au hata para</li>
        
                <li>Wakati wa saa za masomo mwanafunzi hatoruhusiwa kuwa nje ya mipaka ya skuli, Mzee/Mlezi anatakiwa atoe taarifa mapema kuhusu mwanawe, kucheleweshwa kwa taarifa kutapelekea kusimamishwa masomo kwa mwanafunzi.</li>
        
                <li>Mwanafunzi atapaswa kufaulu mitihani yote na watakaopata kiwango chini ya asilimia 45% ya jumla ya masomo yote atalazimika kurudia mwaka.</li>
        
                <li>Kwa wanafunzi wa darasa la sita watatakiwa kupasi angalau kuanzia kiwango cha asilimia 45% chini ya hapo atalazimika kurejea darasa.</li>
        
                <li>Mwanafunzi hatoruhusiwa kula, kunywa na kutafuna ubani akiwemo darasani.</li>
        
            <li>Mwanafunzi hatoruhusiwa kuvaa mapambo kama vile herine, bangili, pete, mkufu kupaka wanja, piko rangi ya mdomo, kutia dawa nywele n.k.</li>
        
            <li>Ni marufuku wanafunzi wa kiume kuvaa mapambo ya kike kama vile mkufu, herini na kadhalika na ni marufuku wanafunzi wa kike kuvaa mavazi ya kiume au kujifananiza na wanaume kama vile suruali za kiume.</li>
        
            <li>Kwa wanafunzi wa darasa la mitihani ya taifa (Mfano, Std 7 n.k) kutakua na malipo ya masomo ya ziada.</li>
            </ol>
        
            <li className="mini-title">AHADI</li>
            {/* <!-- Form 4 --> */}
            <form action="#" id="form-4">
                <label htmlFor="form4_name" className="ahadi-input">
                    Mimi, <input type="text" id="form4_name" name="parent_name" required /> .
                </label>

                <label htmlFor="explanations" className="ahadi-input">
                    Niko tayari kushirikiana na uongozi wa skuli katika kumlea kijana wangu, pia niko tayari kumsimamia kufuata muongozo na masharti ya skuli kama yalivyoelezwa 
                    <input type="text" name="explanations" required />
                </label>

                <label htmlFor="signature" className="footer_sign">
                    <div className="signature-container">
                        <img id="image_signature" width="400" height="150" src="" alt="chora sahihi page namba 5" />
                        <div className="sahihi">SAHIHI</div>
                    </div>
                </label>

                <label htmlFor="form4_date">Tarehe 
                    <input type="date" id="form4_date" name="date" required />
                </label>
            </form>

            {/* <!-- Single Submit Button --> */}
            <button id="nurseryBtn">Tuma fomu</button>
                </ol>
            </div>
        </ol>

        {/* <!-- Pagination Controls --> */}
        <div id="pagination" className="pagination"></div>
    </div>
    </div>
  )
}

export default JoinNursery