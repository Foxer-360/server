import * as redis from 'redis';

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    prefix: process.env.REDIS_PREFIX,
  });

class Cache {
  static key_website(domain) {
    return domain;
  }

  static save_website(domain, data) {
    const key = this.key_website(domain);
    client.set(key, JSON.stringify(data));
  }

  static async get_website(domain) {
    const key = this.key_website(domain);
    return new Promise((resolve, reject) => {
      client.get(key, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    })
    .then((cache) => {
      if (!cache) return false;
      const website = JSON.parse(String(cache));
      if (website) {
        // tslint:disable-next-line:no-console
        console.log(`${new Date()} - [REDIS] Serve website from cache`);
        return website;
      }
      // when wrong data stored, then drop & return false
      this.drop_website(domain);
    })
    .catch((err) => {
      // tslint:disable-next-line:no-console
      console.error(`${new Date()} - [REDIS ERROR] ${err}`);
      return false;
    });
  }

  /**
   * Should cover all necessary deletions on pages cache
   *
   * used in files:
   * /web/router/api/backoffice/newPage/get.js
   *
   */
  static drop_website(domain) {
    const pattern = `${domain}*`;
    // tslint:disable-next-line:no-console
    console.log(`${new Date()} - [REDIS] dropping ${domain}*`);
    client.keys(pattern, (err, keys) => {
      if (Array.isArray(keys)) {
        keys.forEach((key) => client.del(key));
      }
    });
  }

  //////////// PAGE URLS
  static key_pageUrls(domain) {
    return `${domain}/pageUrls`;
  }

  static save_pageUrls(domain, data) {
    const key = this.key_pageUrls(domain);
    client.set(key, JSON.stringify(data));
  }

  static async get_pageUrls(domain) {
    const key = this.key_pageUrls(domain);
    return new Promise((resolve, reject) => {
      client.get(key, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    })
    .then((cache) => {
      if (!cache) return false;
      const website = JSON.parse(String(cache));
      if (website) {
        // tslint:disable-next-line:no-console
        console.log(`${new Date()} - [REDIS] Serve pageUrls from cache`);
        return website;
      }
      // when wrong data stored, then drop & return false
      this.drop_website(domain);
    })
    .catch((err) => {
      // tslint:disable-next-line:no-console
      console.error(`${new Date()} - [REDIS ERROR] ${err}`);
      return false;
    });
  }

  static drop_pageUrls(domain) {
    const pattern = `${domain}/pageUrls*`;
    // tslint:disable-next-line:no-console
    console.log(`${new Date()} - [REDIS] dropping ${domain}*`);
    client.keys(pattern, (err, keys) => {
      if (Array.isArray(keys)) {
        keys.forEach((key) => client.del(key));
      }
    });
  }

    //////////// PAGE INFO
    static key_page(domain, url) {
      return `${domain}:${url}`;
    }

    static save_page(domain, url, data) {
      const key = this.key_page(domain, url);
      client.set(key, JSON.stringify(data));
    }

    static async get_page(domain, url) {
      const key = this.key_page(domain, url);
      return new Promise((resolve, reject) => {
        client.get(key, (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        });
      })
      .then((cache) => {
        if (!cache) return false;
        const website = JSON.parse(String(cache));
        if (website) {
          // tslint:disable-next-line:no-console
          console.log('${new Date()} - [REDIS] Serve page from cache');
          return website;
        }
        // when wrong data stored, then drop & return false
        this.drop_website(domain);
      })
      .catch((err) => { 
        // tslint:disable-next-line:no-console
        console.error(`${new Date()} - [REDIS ERROR] ${err}`);
        return false;
      });
    }

    static drop_page(domain, url) {
      const pattern = `${domain}/${url}*`;
      // tslint:disable-next-line:no-console
      console.log(`${new Date()} - [REDIS] dropping ${domain}*`);
      client.keys(pattern, (err, keys) => {
        if (Array.isArray(keys)) {
          keys.forEach((key) => client.del(key));
        }
      });
    }

    //////////// DATA SOURCES
    static key_datasources(domain) {
      return `${domain}/dataSources`;
    }

    static save_datasources(domain, data) {
      const key = this.key_datasources(domain);
      client.set(key, JSON.stringify(data));
    }

    static async get_datasources(domain) {
      const key = this.key_datasources(domain);
      return new Promise((resolve, reject) => {
        client.get(key, (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        });
      })
      .then((cache) => {
        if (!cache) return false;
        const datasources = JSON.parse(String(cache));
        if (datasources) {
          // tslint:disable-next-line:no-console
          console.log(`${new Date()} - [REDIS] Serve datasources from cache`);
          return datasources;
        }
        // when wrong data stored, then drop & return false
        this.drop_website(domain);
      })
      .catch((err) => {
        // tslint:disable-next-line:no-console
        console.error(`${new Date()} - [REDIS ERROR] ${err}`);
        return false;
      });
    }

    static drop_datasources(domain) {
      const pattern = `${domain}/dataSources*`;
      // tslint:disable-next-line:no-console
      console.log(`${new Date()} - [REDIS] dropping datasources for ${domain}*`);
      client.keys(pattern, (err, keys) => {
        if (Array.isArray(keys)) {
          keys.forEach((key) => client.del(key));
        }
      });
    }
}

export default Cache;