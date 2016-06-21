using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [RoutePrefix("api/Songs")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
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
            string path = HostingEnvironment.MapPath("~/db/songs.json");
            string json = File.ReadAllText(path);
            var songList = JsonConvert.DeserializeObject<List<Song>>(json);

            return songList;
        }
    }
}
