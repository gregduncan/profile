import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Toggle } from '../../components/toggle';

export default function GDCD() {
    const router = useRouter();
    const { id } = router.query;
    const yearId = typeof id === 'string' ? id : undefined;

    return (
        <>
            <Head>
                <title>Greg Duncan | U.I Developer | GDCD{yearId}</title>
                <meta name="description" content={`U.I and software development specialist – View GDCD from GDCD${yearId}. Greg Duncan U.I Developer.`}></meta>
            </Head>
            <div className="page cd-listing">
                <h2 className="margin-bottom-30">GDCD</h2>
                <p>
                    Since 2004 I've put together a compilation of (NEW) music that I have listened to throughout the year. I thought it would be mildly amusing to list it all here. If you'd like to
                    listen follow the links at the bottom of each album.
                </p>
                <ul className="listing">
                    <li>Please select year:</li>
                    <li className={yearId === '2013' ? 'active' : ''}>
                        <Link href="/gdcd/2013">2013</Link>
                    </li>
                    <li className={yearId === '2012' ? 'active' : ''}>
                        <Link href="/gdcd/2012">2012</Link>
                    </li>
                    <li className={yearId === '2011' ? 'active' : ''}>
                        <Link href="/gdcd/2011">2011</Link>
                    </li>
                    <li className={yearId === '2010' ? 'active' : ''}>
                        <Link href="/gdcd/2010">2010</Link>
                    </li>
                    <li className={yearId === '2009' ? 'active' : ''}>
                        <Link href="/gdcd/2009">2009</Link>
                    </li>
                    <li className={yearId === '2008' ? 'active' : ''}>
                        <Link href="/gdcd/2008">2008</Link>
                    </li>
                    <li className={yearId === '2007' ? 'active' : ''}>
                        <Link href="/gdcd/2007">2007</Link>
                    </li>
                    <li className={yearId === '2005' ? 'active' : ''}>
                        <Link href="/gdcd/2005">2005</Link>
                    </li>
                    <li className={yearId === '2004' ? 'active' : ''}>
                        <Link href="/gdcd/2004">2004</Link>
                    </li>
                </ul>
                <div id="listing">
                    <Toggle visible={yearId === '2013'}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2013/1.jpg" width="80" height="80" alt="track" />
                                    <h3>#1 Fragment Two</h3>
                                    <h4>These New Puritans</h4>
                                    <p>Taken from the album 'Field Of Reeds'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2013/6.jpg" width="80" height="80" alt="track" />
                                    <h3>#6 Eliza</h3>
                                    <h4>Anna Calvi</h4>
                                    <p>Taken from the album 'One Breath'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2013/2.jpg" width="80" height="80" alt="track" />
                                    <h3>#2 Strong</h3>
                                    <h4>London Grammer</h4>
                                    <p>Taken from the album 'If You Wait'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2013/7.jpg" width="80" height="80" alt="track" />
                                    <h3>#7 Easy Easy</h3>
                                    <h4>King Krule</h4>
                                    <p>Taken from the album '6 Feet Beneath The Moon'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2013/3.jpg" width="80" height="80" alt="track" />
                                    <h3>#3 Adam</h3>
                                    <h4>New Desert Blues</h4>
                                    <p>Taken from the e.p 'Adam'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2013/8.jpg" width="80" height="80" alt="track" />
                                    <h3>#8 GMF</h3>
                                    <h4>John Grant</h4>
                                    <p>Taken from the album 'Pale Green Ghosts'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2013/4.jpg" width="80" height="80" alt="track" />
                                    <h3>#4 Riptide</h3>
                                    <h4>Vance Joy</h4>
                                    <p>Taken from the album 'Riptide'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2013/9.jpg" width="80" height="80" alt="track" />
                                    <h3>#9 Cruel City</h3>
                                    <h4>Augustines</h4>
                                    <p>Taken from the album 'Augustines'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2013/5.jpg" width="80" height="80" alt="track" />
                                    <h3>#5 Single Cheep</h3>
                                    <h4>King Creosote</h4>
                                    <p>Taken from the album 'That Might Well Be It, Darling'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2013/10.jpg" width="80" height="80" alt="track" />
                                    <h3>#10 Nothing Arrived</h3>
                                    <h4>Villagers</h4>
                                    <p>Taken from the album 'Awayland'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <a href="http://open.spotify.com/user/gregduncan/playlist/7xAfI24YbblgfzBE0l7ZSZ" target="_blank" className="spotify" title="Open in Spotify"></a>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle visible={yearId === '2012'}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2012/1.jpg" width="80" height="80" alt="track" />
                                    <h3>#1 Hail Bop</h3>
                                    <h4>Django Django</h4>
                                    <p>Taken from the album 'Django Django'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2012/6.jpg" width="80" height="80" alt="track" />
                                    <h3>#6 Feels Like We Only Go Backwards</h3>
                                    <h4>Tame Impala</h4>
                                    <p>Taken from the album 'Lonerism'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2012/2.jpg" width="80" height="80" alt="track" />
                                    <h3>#2 Pythagorean Fearem</h3>
                                    <h4>Howler</h4>
                                    <p>Taken from the album 'America Give Up'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2012/7.jpg" width="80" height="80" alt="track" />
                                    <h3>#7 Ho Hey</h3>
                                    <h4>The Lumineers</h4>
                                    <p>Taken from the album 'The Lumineers'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2012/3.jpg" width="80" height="80" alt="track" />
                                    <h3>#3 Two Hours</h3>
                                    <h4>Theme Park</h4>
                                    <p>Taken from the album 'Theme Park'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2012/8.jpg" width="80" height="80" alt="track" />
                                    <h3>#8 I'm Getting Ready</h3>
                                    <h4>Michael Kiwanuka</h4>
                                    <p>Taken from the album 'Home Again'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2012/4.jpg" width="80" height="80" alt="track" />
                                    <h3>#4 Dead Film Star</h3>
                                    <h4>Team Ghost</h4>
                                    <p>Taken from the album 'Team Ghost'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2012/9.jpg" width="80" height="80" alt="track" />
                                    <h3>#9 Where Do The Blue Birds Fly</h3>
                                    <h4>The Tallest Man On Earth</h4>
                                    <p>Taken from the album 'Shallow Grave'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2012/5.jpg" width="80" height="80" alt="track" />
                                    <h3>#5 Trouble Town</h3>
                                    <h4>Jake Bugg</h4>
                                    <p>Taken from the album 'Jake Bugg'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2012/10.jpg" width="80" height="80" alt="track" />
                                    <h3>#10 Laura</h3>
                                    <h4>Bate For Lashes</h4>
                                    <p>Taken from the album 'The Haunted Man'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <a href="http://open.spotify.com/user/gregduncan/playlist/6krGL1lbLEyPkwIJhoAvfc" target="_blank" className="spotify" title="Open in Spotify"></a>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle visible={yearId === '2011'}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2011/1.jpg" width="80" height="80" alt="track" />
                                    <h3>#1 L.I.F.E.G.O.E.S.O.N.</h3>
                                    <h4>Noah And The Whale</h4>
                                    <p>Taken from the album 'Last Days On Earth'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2011/6.jpg" width="80" height="80" alt="track" />
                                    <h3>#6 Give Me My Month</h3>
                                    <h4>James Blake</h4>
                                    <p>Taken from the album 'James Blake'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2011/2.jpg" width="80" height="80" alt="track" />
                                    <h3>#2 Inhaler</h3>
                                    <h4>Miles Kane</h4>
                                    <p>Taken from the album 'Colour Of The Trap'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2011/7.jpg" width="80" height="80" alt="track" />
                                    <h3>#7 Baby Says</h3>
                                    <h4>The Kills</h4>
                                    <p>Taken from the album 'Blood Pressures'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2011/3.jpg" width="80" height="80" alt="track" />
                                    <h3>#3 Hawaiian Air</h3>
                                    <h4>Friendly Fires</h4>
                                    <p>Taken from the album 'Pala'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2011/8.jpg" width="80" height="80" alt="track" />
                                    <h3>#8 Video Games</h3>
                                    <h4>Lana Del Ray</h4>
                                    <p>Taken from the album 'Born To Die'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2011/4.jpg" width="80" height="80" alt="track" />
                                    <h3>#4 Pumped Up Kicks</h3>
                                    <h4>Friendly Fires</h4>
                                    <p>Taken from the album 'Torches'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2011/9.jpg" width="80" height="80" alt="track" />
                                    <h3>#9 That's Where You're Wrong</h3>
                                    <h4>Arctic Monkeys</h4>
                                    <p>Taken from the album 'Suck It And See'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2011/5.jpg" width="80" height="80" alt="track" />
                                    <h3>#5 Still Life</h3>
                                    <h4>The Horrors</h4>
                                    <p>Taken from the album 'Skying'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2011/10.jpg" width="80" height="80" alt="track" />
                                    <h3>#10 Lippy Kids</h3>
                                    <h4>Elbow</h4>
                                    <p>Taken from the album 'Build A Rocket Boys!'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <a href="http://open.spotify.com/user/gregduncan/playlist/1VKQ2axFl8duTtWuCCwhI4" target="_blank" className="spotify" title="Open in Spotify"></a>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle visible={yearId === '2010'}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2010/1.jpg" width="80" height="80" alt="track" />
                                    <h3>#1 Young Blood</h3>
                                    <h4>The Naked + Famous</h4>
                                    <p>Taken from the album 'Passive Me, Aggressive You'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2010/6.jpg" width="80" height="80" alt="track" />
                                    <h3>#6 Sea Serpents</h3>
                                    <h4>Babeshadow</h4>
                                    <p>Taken from the album 'Babeshadow'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2010/2.jpg" width="80" height="80" alt="track" />
                                    <h3>#2 O.N.E</h3>
                                    <h4>Yeasayer</h4>
                                    <p>Taken from the album 'Odd Blood'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2010/7.jpg" width="80" height="80" alt="track" />
                                    <h3>#7 Answer To Yourself</h3>
                                    <h4>The Soft Pack</h4>
                                    <p>Taken from the album 'The Soft Pack'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2010/3.jpg" width="80" height="80" alt="track" />
                                    <h3>#3 Algebra</h3>
                                    <h4>Airship</h4>
                                    <p>Taken from the album 'Spirit Of The Beehive'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2010/8.jpg" width="80" height="80" alt="track" />
                                    <h3>#8 Light It Up</h3>
                                    <h4>Bloody Red Shoes</h4>
                                    <p>Taken from the album 'Fire Like This'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2010/4.jpg" width="80" height="80" alt="track" />
                                    <h3>#4 Ive &amp; Gold</h3>
                                    <h4>Bombay Bicycle Club</h4>
                                    <p>Taken from the album 'Flaws'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2010/9.jpg" width="80" height="80" alt="track" />
                                    <h3>#9 This Orient</h3>
                                    <h4>Foals</h4>
                                    <p>Taken from the album 'Total Life Forever'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2010/5.jpg" width="80" height="80" alt="track" />
                                    <h3>#5 Wreckin' Bar (Ra Ra Ra)</h3>
                                    <h4>The Vaccines</h4>
                                    <p>Taken from the album 'What Did You Expect From The Vaccines?'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2010/10.jpg" width="80" height="80" alt="track" />
                                    <h3>#10 Everything You Wanted</h3>
                                    <h4>Kele</h4>
                                    <p>Taken from the album 'The Boxer'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <a href="http://open.spotify.com/user/gregduncan/playlist/2kCrd7rty66TDrxAZMjhda" target="_blank" className="spotify" title="Open in Spotify"></a>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle visible={yearId === '2009'}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2009/1.jpg" width="80" height="80" alt="track" />
                                    <h3>#1 Surprise Hotel</h3>
                                    <h4>Fool's Gold</h4>
                                    <p>Taken from the album 'Fool's Gold'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2009/6.jpg" width="80" height="80" alt="track" />
                                    <h3>#6 Roll Up Your Sleeves</h3>
                                    <h4>We Were Promised Jet Packs</h4>
                                    <p>Taken from the album 'These Four Walls'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2009/2.jpg" width="80" height="80" alt="track" />
                                    <h3>#2 Walking On A Dream</h3>
                                    <h4>Empire Of The SUn</h4>
                                    <p>Taken from the album 'Walking On A Dream'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2009/7.jpg" width="80" height="80" alt="track" />
                                    <h3>#7 Home</h3>
                                    <h4>Edward Sharpe And The Magnetic Zeros</h4>
                                    <p>Taken from the album 'Up From Below'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2009/3.jpg" width="80" height="80" alt="track" />
                                    <h3>#3 Not The Only One</h3>
                                    <h4>The Rumble Stripes</h4>
                                    <p>Taken from the album 'Welcome To The Walk Alone'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2009/8.jpg" width="80" height="80" alt="track" />
                                    <h3>#8 Little Lion Man</h3>
                                    <h4>Mumford And Sons</h4>
                                    <p>Taken from the album 'Sign No More'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2009/4.jpg" width="80" height="80" alt="track" />
                                    <h3>#4 Let's Go Surfing</h3>
                                    <h4>The Drums</h4>
                                    <p>Taken from the album 'The Drums'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2009/9.jpg" width="80" height="80" alt="track" />
                                    <h3>#9 Sweet Disposition</h3>
                                    <h4>The Temper Trap</h4>
                                    <p>Taken from the album 'Conditions'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2009/5.jpg" width="80" height="80" alt="track" />
                                    <h3>#5 It's Alright</h3>
                                    <h4>Little Red</h4>
                                    <p>Taken from the album 'Listen To Little Red'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2009/10.jpg" width="80" height="80" alt="track" />
                                    <h3>#10 A Whole New Way</h3>
                                    <h4>The Horrors</h4>
                                    <p>Taken from the album 'Primary Colours'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <a href="http://open.spotify.com/user/gregduncan/playlist/3jYFNFpYEoprzasmYlvXDK" target="_blank" className="spotify" title="Open in Spotify"></a>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle visible={yearId === '2008'}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2008/1.jpg" width="80" height="80" alt="track" />
                                    <h3>#1 Not Gonna Teach Your Boyfriend How To Dance</h3>
                                    <h4>Black Kids</h4>
                                    <p>Taken from the album 'Partie Traumatic'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2008/6.jpg" width="80" height="80" alt="track" />
                                    <h3>#6 Shape Of My Heart</h3>
                                    <h4>Noah And The Whale</h4>
                                    <p>Taken from the album 'Peaceful, The World Lays Me Down'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2008/2.jpg" width="80" height="80" alt="track" />
                                    <h3>#2 Two Doors Down</h3>
                                    <h4>Mystery Jets</h4>
                                    <p>Taken from the album 'Twenty One'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2008/7.jpg" width="80" height="80" alt="track" />
                                    <h3>#7 Roll The Dice</h3>
                                    <h4>Sarah Schiralli</h4>
                                    <p>Taken from the album 'Sarah Schiralli'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2008/3.jpg" width="80" height="80" alt="track" />
                                    <h3>#3 Diana</h3>
                                    <h4>Operahouse</h4>
                                    <p>Taken from the album 'Operahouse'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2008/8.jpg" width="80" height="80" alt="track" />
                                    <h3>#8 Golden Age</h3>
                                    <h4>TV On The Radio</h4>
                                    <p>Taken from the album 'Dear Science'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2008/4.jpg" width="80" height="80" alt="track" />
                                    <h3>#4 A-Punk</h3>
                                    <h4>Vampire Weekend</h4>
                                    <p>Taken from the album 'Vampire Weekend'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2008/9.jpg" width="80" height="80" alt="track" />
                                    <h3>#9 L.E.S Artists</h3>
                                    <h4>Santagold</h4>
                                    <p>Taken from the album 'Santagold'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2008/5.jpg" width="80" height="80" alt="track" />
                                    <h3>#5 Sex Is On Fire</h3>
                                    <h4>Kings Of Leon</h4>
                                    <p>Taken from the album 'Only by the night'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2008/10.jpg" width="80" height="80" alt="track" />
                                    <h3>#10 Time To Pretent</h3>
                                    <h4>MGMT</h4>
                                    <p>Taken from the album 'Oracular Spectacular'.</p>
                                </div>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle visible={yearId === '2007'}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2007/1.jpg" width="80" height="80" alt="track" />
                                    <h3>#1 Delivery</h3>
                                    <h4>Babyshambles</h4>
                                    <p>Taken from the album 'Shotters Nation'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2007/6.jpg" width="80" height="80" alt="track" />
                                    <h3>#6 No Pussy Blues</h3>
                                    <h4>Grinderman</h4>
                                    <p>Taken from the album 'Grinderman'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2007/2.jpg" width="80" height="80" alt="track" />
                                    <h3>#2 Superstar Tradesman</h3>
                                    <h4>The View</h4>
                                    <p>Taken from the album 'Hats Off To The Buskers'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2007/7.jpg" width="80" height="80" alt="track" />
                                    <h3>#7 1234</h3>
                                    <h4>Feist</h4>
                                    <p>Taken from the album 'The Reminder'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2007/3.jpg" width="80" height="80" alt="track" />
                                    <h3>#3 Golden Skans</h3>
                                    <h4>The Klaxons</h4>
                                    <p>Taken from the album 'Myths Of The Near Future'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2007/8.jpg" width="80" height="80" alt="track" />
                                    <h3>#8 Mistaken For Stangers</h3>
                                    <h4>The National</h4>
                                    <p>Taken from the album 'Boxer'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2007/4.jpg" width="80" height="80" alt="track" />
                                    <h3>#4 No Cars Go</h3>
                                    <h4>Arcade Fire</h4>
                                    <p>Taken from the album 'Neon Bible'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2007/9.jpg" width="80" height="80" alt="track" />
                                    <h3>#9 Green Fields</h3>
                                    <h4>The Good, The Bad and the Queen</h4>
                                    <p>Taken from the album 'The Good, The Bad and the Queen'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2007/5.jpg" width="80" height="80" alt="track" />
                                    <h3>#5 Weird Fishes / Arpeggi</h3>
                                    <h4>Radiohead</h4>
                                    <p>Taken from the album 'In Rainbows'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2007/10.jpg" width="80" height="80" alt="track" />
                                    <h3>#10 Do Me A Favour</h3>
                                    <h4>Arctic Monkeys</h4>
                                    <p>Taken from the album 'Favourite Worst Nightmare'.</p>
                                </div>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle visible={yearId === '2005'}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/1.jpg" width="80" height="80" alt="track" />
                                    <h3>#1 Fuck Forever</h3>
                                    <h4>Babyshambles</h4>
                                    <p>Taken from the album 'Down In Albion'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/7.jpg" width="80" height="80" alt="track" />
                                    <h3>#7 Til Kingdom Come</h3>
                                    <h4>Coldplay</h4>
                                    <p>Taken from the album 'X &amp; Y'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/2.jpg" width="80" height="80" alt="track" />
                                    <h3>#2 Be Gone</h3>
                                    <h4>British Sea Power</h4>
                                    <p>Taken from the album 'Open Season'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/8.jpg" width="80" height="80" alt="track" />
                                    <h3>#8 The Weight Of The World</h3>
                                    <h4>B.R.M.C</h4>
                                    <p>Taken from the album 'Howl'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/3.jpg" width="80" height="80" alt="track" />
                                    <h3>#3 Forget Myself</h3>
                                    <h4>Elbow</h4>
                                    <p>Taken from the album 'Leaders Of The Free World'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/9.jpg" width="80" height="80" alt="track" />
                                    <h3>#9 Bloody Motherfucking Arsehole</h3>
                                    <h4>Martha Wainwright</h4>
                                    <p>Taken from the album 'Martha Wainwight'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/4.jpg" width="80" height="80" alt="track" />
                                    <h3>#4 Hoppipolla</h3>
                                    <h4>Sigur Ros</h4>
                                    <p>Taken from the album 'Takk'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/10.jpg" width="80" height="80" alt="track" />
                                    <h3>#10 Dare</h3>
                                    <h4>Gorillaz</h4>
                                    <p>Taken from the album 'Demon Days'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/5.jpg" width="80" height="80" alt="track" />
                                    <h3>#5 The One You Love</h3>
                                    <h4>Rufus Wainwright</h4>
                                    <p>Taken from the album 'Want Two'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/11.jpg" width="80" height="80" alt="track" />
                                    <h3>#11 Rebellion (Lies)</h3>
                                    <h4>Arcade Fire</h4>
                                    <p>Taken from the album 'Funeral'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/6.jpg" width="80" height="80" alt="track" />
                                    <h3>#6 Love Me Like You</h3>
                                    <h4>The Magic Numbers</h4>
                                    <p>Taken from the album 'The Magic Numbers'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2005/12.jpg" width="80" height="80" alt="track" />
                                    <h3>#12 Little Thoughts</h3>
                                    <h4>Bloc Party</h4>
                                    <p>Taken from the album 'Silent Alarm'.</p>
                                </div>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle visible={yearId === '2004'}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/1.jpg" width="80" height="80" alt="track" />
                                    <h3>#1 All These Things That I Have Done</h3>
                                    <h4>The Killers</h4>
                                    <p>Taken from the album 'Hot Fuss'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/7.jpg" width="80" height="80" alt="track" />
                                    <h3>#7 Dreaming</h3>
                                    <h4>Dizzee Rascal</h4>
                                    <p>Taken from the album Showtime'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/2.jpg" width="80" height="80" alt="track" />
                                    <h3>#2 What Became Of The Likely Lads</h3>
                                    <h4>The Libertines</h4>
                                    <p>Taken from the album 'The Libertines'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/8.jpg" width="80" height="80" alt="track" />
                                    <h3>#8 Confusion</h3>
                                    <h4>The Zutons</h4>
                                    <p>Taken from the album 'Who Killed...... The Zutons?'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/3.jpg" width="80" height="80" alt="track" />
                                    <h3>#3 Gravity</h3>
                                    <h4>Embrace</h4>
                                    <p>Taken from the album 'Out Of Nothing'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/9.jpg" width="80" height="80" alt="track" />
                                    <h3>#9 Into The Fire</h3>
                                    <h4>Thirteen Senses</h4>
                                    <p>Taken from the album 'The Invitation'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/4.jpg" width="80" height="80" alt="track" />
                                    <h3>#4 Take Me Out</h3>
                                    <h4>Franz Ferdinand</h4>
                                    <p>Taken from the album 'Franz Ferdinand'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/10.jpg" width="80" height="80" alt="track" />
                                    <h3>#10 Stumble And Fall</h3>
                                    <h4>Razorlight</h4>
                                    <p>Taken from the album 'Up All Night'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/5.jpg" width="80" height="80" alt="track" />
                                    <h3>#5 The Bucket</h3>
                                    <h4>Kings Of Leon</h4>
                                    <p>Taken from the album 'Aha Shake Heartbreak'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/11.jpg" width="80" height="80" alt="track" />
                                    <h3>#11 Not For All The Love In The World</h3>
                                    <h4>The Thrills</h4>
                                    <p>Taken from the album 'Let's Bottle Bohemia'.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/6.jpg" width="80" height="80" alt="track" />
                                    <h3>#6 This One's For You</h3>
                                    <h4>Ed Harcourt</h4>
                                    <p>Taken from the album 'Strangers'.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="track">
                                    <img src="../images/tracks/2004/12.jpg" width="80" height="80" alt="track" />
                                    <h3>#12 Dry Your Eyes</h3>
                                    <h4>The Streets</h4>
                                    <p>Taken from the album 'A Grand Don't Come For Free'.</p>
                                </div>
                            </div>
                        </div>
                    </Toggle>
                </div>
            </div>
        </>
    );
}
