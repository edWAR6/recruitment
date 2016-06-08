using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Oclock.Controllers
{
    [RoutePrefix("api/Songs")]
    public class SongsController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Song.ReturnSongs());
        }
    }

    public class Song
    {
        public string url { get; set; }
        public int id { get; set; }
        public string songname { get; set; }
        public int artistid { get; set; }
        public string artistname { get; set; }
        public int albumid { get; set; }
        public string albumname { get; set; }

        public static List<Song> ReturnSongs()
        {

            string json = File.ReadAllText("db/songs.json");
            var songList = JsonConvert.DeserializeObject<List<Song>>(json);

            return songList;
        }
    }

}

