// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  return "\n    <header>\n            <figure>\n                <img alt=\"paints\" src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGBobGRgYFxoaGBgaGRoaGxkYGBgYHiggGxolHRgbIjEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICYtLy8yLS0tLS0tLS4tLS0tLS8tLS0tLS0tLS0tLS01Ly0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgQHAAIDAf/EAEMQAAECBAQDBgQEAggGAwEAAAECEQADITEEEkFRBWFxBiKBkaHwEzKxwULR4fEUUgcVI2JygpKyJDM0U6LCc5PSY//EABsBAAMBAQEBAQAAAAAAAAAAAAMEBQIGAQAH/8QAMhEAAgIBAwIEBAYCAgMAAAAAAQIAAxEEEiExQQUTIlEyYXGxFCOBkaHw0eEzUjRCwf/aAAwDAQACEQMRAD8AqvH8PnJPflqTR6ijNRuVfWIiJEwAHIWrVmd3e/Ixd8gD+GxE1wkhErQEfKHcG7ilteUKXE8EyQpSQkKDgaMzj7DxiYniDGtWx1zGvLJJxEPAreh91rXS92NoNYVHeHKrXtWz7C36OFSsCaFJoFUI8fflDNLlZQk6EAVpTMCzVY5mp/e2eKWNwzHtDzCqCMyQRpahaige9Sz31bnGwJIZmqQLi3k9Q8QUkvmJNKV3ZPPX76RMlpBzAA1DhncKewfn+W0DxzLBUYnXDqZL22tS7KoNSxvvtTASFXYOKcnbbp5aPGyAyne9wKuxoKDwpveOJLuSS5Y3ZjQeAd7wG4d4RBkQhg8aQX0NerFmqbQekTAoM4tSgtq7eULOGLlgQRS4ANXYVD7bww4dDfyggEU6CojwuSIpdWAZKXMAKaj6+F4Jy5hYCltR72gRJd0g3pbqL7iCyfmDinI1qfflC5sZQ0StUcTqmVSh1P1/cR3wa+84pb1/aMluUk89WrW/ONMMg1Ow9aAXrvCNT/mjEEwyJJxRF9wa+/CB2KSzaULH6QSmSgQG5GuvhEDEyHTfUggs45v0jFoLNn5z5MCAsZKJqAG1G2wHvW8DMhBsNvKocc3IeDU2XuLsxPTXzgaUEqVZ3SNDYjTypDGOAIygzPCGAB+5fM/6eUQAVB8w/lrTYg0e7EeekGMXLDk2ZjtUi3veBuNZqm/hvb1PjFClM8TxpDnzDRRG58WFhdrjwiHiVuxr5amv6eAiVONGIqfsKC/PTYRAJDt4k7+7eHOKKJsWLlSTI+Kqqln8BXeIGOw+ZOyuf70fMPyiVPWxI0a4c8rHoKxHUokagNY+zsPPnUqkYmWXPECrkEA09Nv20gZi5TGGTEAZSNN+gex90MBpEn4s1KdNX5b8nYR5aw25k+2sJNMDwtUypoGe1f0ifiezygwcuw0Njal25w18I4eaqDAJAJZn3vvakMkkpOBlzMqVFE2cnTv5XyuoAOHyhzsIianU3V4YDiZrqdl3HiU//VE3Yef6RkOP8anf0H5xke/i7fafbDHiTOAwqkOCZvw0JGtiFDyA/wBQ3iD26UUgDTKp+jU0p+8cuC4d5yColQSCwJpcGg5P4lUS+24By2FCOg/OvpCdBAoIJzyPvmOjO4Sm5C/7Qf4gYdPihg+gpTRlPfqwffSEqeMkyoIY13vBf+tkIIDK2PyksPMGv0joF6Quivrr3bz3h+Yohh8od61csKFmo4PsQWwpDPQ7gtuwFmJbLXk9IR53HVEnuB+Zc10NvYgrw/tAhPzA82aooQlyaB6W/DGGqYjiPHxKluI3YyUKn5ikO4JuLtYs6YjjDqFG1DCh6OLnfTpHDD9o5SsoSoOwBcEMXp3gDo2msa4bjaD3u6k1cFTGjuWUEgnbvfaMJRaRyIRNbX0zCXDpBzJUQe8zkNYEkKoKHrtyhjwyHps1WY5jWzwtYPigzAFBCSR3gCVfKWcJd6qfnBvB4tOZ81SQTRJa4Zr2cM7jVo+bTsADMPbvyRCWHknM5IDgEhzfYKel+ji0EZPzNsK2Nyag31iPKWCo/hoSU3B2IoDlFy24Nqxvh5nfll/mULsAQQdLg/Ma6kbwhqBnKiJuc8wpNKQhQ2I8D+ppEZHdSnm1dDazdWjJyXJANwPT6l9o2+J3EiljptesTgoR+ZgdJsFVfp5RExZDHdwN6mg9T5xLnLYHcDff94DYpexo9Kc2fwtDZQECfLnM4TpgGrPye7CvPwgapDV0Up72DOBS/wCkSZ88MGY3JSKG/nt5RGmTgUqNkuWDaAAj7+xGANtgzHawQJrNJWCKPXzGnL9IgY7QlgAo+DHYbjlEmTiRlzKNOorcOD0pVnED+IYxLO4CWcVeho48Oh84vUlZh+JDxU6pOxIA5uHtqzjwEQAsv5vXanTW3PrHDHY++VqO2ut68nvy3gRN4qAzEEmhFwPAfpBnzF/OUQvN35OdqE1L0096xVzhu/PTzPNjAqbxYqvXlYNo1et3aI83GEnKd63p4kBvpAYJtQkJTlOL/ub+lPKIvApBM41/D51H5R5Ompygggk6AgqvVxsw+kb8GnAzFEfy+Ic+/KMXAsmBE9W42ZljcIQTIUwqQ713P0aBfC+LGXh/ht3pExRbkpQUF87FPhDF2Zmf8P8A3SCz6gk79ft0Re0RMucVpNSK7EH8JHhCur22KKz/AHmE0zeZWV9jD39aSf8Ato/0iMhE/jT/AC/+RjyJ34Af0zz9JanZ7DkkK1b6/tEXtatyOVvGn0D+MEOHLKQ7moNTbmbVuaav5rvH8V852FOWbQ+G28CpXNeR7x09ZWuPrMVzV94l4TBPVTMN3H+5hEfDJzzQ+7wz4bhicoBAHhzu0dLWO0TqoNmWguZwoEPLWlnAcrs5IAd8v0tEfESZiCykeBFaE/iDPUmvKkM4w4RViKmgLCjWFrO/KI+JUFUyG1HUFOWA8NOf2aCqBPnoIMBYZSRRSC3UBxsxBp+d46TcX3xkSEpp8tD4km8TTIdNhuQkjTcGxoTVvGkB5iBZtaM1vAmMF8TPkkcw/hsZKyDKpSVJLveu1NCDakEsPx/Ke8xBd2rWlSSKnT3VGZjvHdZUkAvQwF7+0paa7CHK9JanC+0BopSwxbMSX0/EGt46awzysSlYSpLGoymrXFd2oYpLBY9QDhWWjEXBrqIdez/FMzZRQbNRzUdC8StUAELQpUMeJYuGnOrNmdvtWgsA5J8rtEwju2JIfyd2+vlAOQXHItQb2Jfx5QVQxlB3pu1edPpCNWLF3HrzF2G04nGdPp1r5sw98oHYya0uxe766uG5u/hHTiC2pYUu9N28/SAePxRTLobFhzP83g7+EEr5bJjFVe4jEH4nFFKqEPW7Hr9TAvF8UAFLuacy9PF69IjLxB/tFOC1HH+EsBy0eAfEsSkVe2b6sG6160hytQWjmpYVCEJnGVEOCBl6028S5b7QFx+PWS6ySRRnb0iNiccWASAGcODckv4mrP4deEtcxsocebl9usUkwBOfuvLTadMUrcAc6B3oEvT9Y5qlkODQjRq+OovaJuGwZZ8qm1NNQWv9o7pwuVy7dRyem2g5MekbPMWCwalOagJf/CBemlusRpiCKF3sxg6MMQAbnxfTVtY4/wAIrQ5b1NTXmK20gZxN+WxgjMR7f6xO4LMZahug/baOOIwqkkuPfS8EuyeHzTVj/wDko+SkHWMM2BmDarPpaWtwiSEYRLF3SCPEDn051hJ7UVWfO8PMhv4VCkl0qoTaqRlLeIMJ3EpRU5PP9tvfOJbWFySexMfq0/lKQsUO7GRM/gxz8o8g29YPBljzcalCQC/nfKK70+xPit9qwUyydTX8vT7Q0cZwYeWkMCUpJYbhDONnPrC52jLJCSxKSE72sN7AaQJBWKqAvU8kfabRrfNYMPT2P3iFgJwQsFtKdYNp4sQ/dJ6h/q8L6nQpxS7eBI+0FMDglzWPype5v4AXiukHVayrhZNVxdRFX1PdGUA7DkzaaiOUviKSXJH/AJdSH26OamgiXM4TJltmUSTpTMTyDeDc4hTOJIfKmSxA/E4NtW9nlBskdTMO7HgmdAtKmBUDSxG9avRJ5sKRt/CJWMzDqDVvA1Ph+o6djEmpSBr3S3+2np5WjyQsEjIopWLE09RUA+zpAmOZgEyTjuErS7B/eobelKUgfPWtPdULdRDHgVTDevUBw2y2rZmYlxEjGYUKAo72KWOwLBx1bpu0CIB6wgsdO/WKUmYKvqLPfxhj7LYgJWBm7puDccxHLg/BUmePiJ7oUUt/eTVXgBrzEOOM7PAS0rSpMtK1EJRNWSm9CFF2cuKtXlUKXtnK47ShpgxUMR9Iw8NxedtxfwHKGjDsU0NB4Pq/rFX9hMb/AG/wiWezl/l0c3DORqGN7xamDSAhw5oej7e94laSl672U/CeZ7qOOowYvcXWyjUk09TFbdpeK9/KNDDb2nxxTmUz1ZySbUt+UAcB2Z+KPizUqKjVQoybsOZp9YZdq6TueenUCgYzyYnrxK1pYBw79a6trEH+EUpXeINbDRyTducNnafsyJSAsIyqvlagbnqYCSJwUwSmrUdgAdGA5v0+j+lurtTcvSTr72tPM5SeGjUEkcia7FuQPrzidJwyC4CkpbQ1O1Uhxcb84N8O4CSn4k51l6JsmtwAL6X8o84pj5UlQlpatkpoAaACjU313hteRkQfl4GTAa5aiTlSvSuUh6Abt5RGnCaK5FA7tV96HrTlEiZxlTGia0KQASGajEgh3NGsBziLN4ysqGYUejDK7hgLlnjeV955icP4tb1cU2YWtbW0EMIH+ddOR12cUY73rEPFzkvlWFJVR6WHXW0Q0LKT3TTaA2Ie0Ij4MZMVIGSgfaoeI2BV8OaClAUVoUhqagEnZw0dOFYgrBLimlm8K+YjfBH/AIpFfwrrTZtPK2vhAVVlU5jvpYD6j7x24BilLwpSWdKntTveyfHlAPico5TrU6dRd9oL9mi2ZIIDi1aNY+dfPx84xh2elC5q1PdfZjOpo2Vsyjvn9466gWFREX4Sfb/nGQV/g/bRkIedB+SPaWH2ikj4kuhyhKXcBvlfqC7VFtoRO10wOKBn5aEDycGLF7R/KK1CU01okV+u/rFU9p1uoaUqOtedXeDVJlqz7LFKjlCYrLm95Jaz/wC4mJ8jHzV91D9Q9A/L7QLZ1NDj2ewCQMyS59B5RTBw2IjSpaN/YzslKCROUAtZq5SGHQbjnXpC3Nwkv+sZvxwlhiUZkl6ysyfw6pym2yTDLw7HTZXyn1pyBfqIh8bwoxU1E4K+HNAbMlgVCrFWajVoWq8M2LurwvUcz1aSlm48icOIT8OrFCQnDYRElBWozRLlo+IDnZKFBOYtmASHqUuLAwO7LcNzY6QkpBOValhrIbKnNo5IfooR1m9nMSFBYWkKf/t0qLjzHVxB/sq2DC1KR8SassqYo66DkH5wCtXLgsAMTTIAhVMnM7dpOy/we/J+Qkkpeo1py9YW8jlYAqUquWyqsaWDnU2KlVDmGHH9sZpWO6gpDHKAX1vXlAaaTNExSZQSACorzEnvEJAcMC9fIwLVFFG/OIWlDt2POvZfDJWd1ElKQwfvFiphQOwG1KQ6dqJqUJTKQzIDLP8AKliWp+ItUaA84WuzctacqnCQHq1i5LsRVVS19OUEOMzAnClYCsqiplF3JcOXN+upVtCWhtFtrA/3r95UqXcyKOgiHgJ+TFyVCn9oPWn3i7+HzM0v31ihpVZ6Dsoehf7Rd3ZlRMkKIbMP035Ruyv1Fx2m/ER6sxE7cKyqlpDVW/8ApLg+nrDLwpEsYaTNmKUEOnNlJGVwQFMKHKpQP7Qu9t5FSSHMsvQaBifQwY7JSVTcHMlKBISQUnkpzTofqYl+LVfkpZ9M/rxJ19QYhoJ7W8QmGd8GYEFCg8paQ2Z7F35VYbaQpSMkg1DO5Bcu9iPV+jRZasFllyyUhaBVL/NKPyqCTcA36HlCT2jwAUqgpUOWLE2t4PGNFfWQqKMcYOOhx3+XzHv0iKVWVucnIzCnZ/BTcWyADLlmpUbkF6JHN7mlY07ednpcjFYQJAEtSJqXWWBXl7udW5LV/uxy4D2hnpEtIKQZYyigFBfMTZmJ2qWu0MXGuKJxWHMrEyQpJqlQUykkWUNj+fOOrVAa8L7dZ84sLh+oHaLvaPiklJk4eRIw+VakFcwyJYEsZEIykKllXzOo5WNGephZ4/hUK+KEJGVc3+yAFDmJYJTQJ6NTlBTEcAxKO6ma4LMJiC5q4rqbax7wvJJnCdiV/EmJPcSyglKqVbU1Fee8LeVazANgDPWGwqqSucmNHaDgUteH/tEjMEs7VBb6RUWO4euUSWOV6E0eHnjna5UxRZJYeXRhChxCcZisxfx8Hp15Q1cQx4i6VbV5PMzCTEqSGOVY/EPodxG/DsQr+JS5dgocmIr6fSBplqDs8S+HIyqCjfNrZmLh+f2gKepsTTWlRLD4FNIX5eNQNfD6R27V4gIRVy9L/ppXwMROz474Jvz50fz+kR+2qnCQLs58fu31gzjcpEvuPLIPyi9/Wkv+YxkCMx3PrGQh+HX2mPxLfL9v9y4+OzybH5QHJdwwAYu/94aGtdDFY8XDlZajjb3p6eEWJx2QlGFSsNUAMLW+YVu4L3NqkWrbiRLAlgT0ff6NA62Ukbe3ER0oHkkd4BkSsyvGGThCCmxYMdw3OxDaf5oG8Gw7qVu7Ddz79Yc8LgKWLFqC5YEAcuvS8C1OoCtiKVIZEw2LUHGZg11M1+RB9N4nf1ipwxlrqagp0pUvT/U3nEtPDGGjk6NatCSKFx4NzDbBbP3mO1AAXoLE6s7g2DM8b0+tL8CFbcJC+JMUMyGYvUJ1LWqf5RHicMo/MS12sCQKBThgCOTWrBKXNR+IIqxLkEh2ql2Z9KlRBsbxyxuKYUAF1KY5qJchJIApag8bQ7+Y4xnEH5pEgzcCmWAe6Ck2vdwCwcm40apZ2ifw6UJQALVFAbl6Orm2hLsdoEzA6+6RmBSUqBqk1YpNnYg01VBrgvDc6nUSAkM7Prcc4keIBmIpBzHNKoPrMK8PwtWlhlLJA1AegUAXBNSfLnGf0lTUykIkpYZZYBZrkgk6X6QwcHTLlpVOIdMp0pbVdi1X86hjtWqu1vFjOmKmKub1/L6RnTVFG4Pw9T7sRwP0H3lDSVhrS4GAv3nTsThRNxTkBkg1NgSKen1i3uHgJk/M4ahYjlaKD4HxJcvMUuc2niC450Ai6OE4hSsMkqBBZyCa1t75RbCBKM94rq3NpDdiYD7QELEx6irjkztWIP8ARnxvKteGLWUxeuZH5pc/5ecSOLZhnGpq/V4rng+NVKxUtVHJBrZ+fKEdZp/O0jIe44+onpHG33/ol4ywMplFmUSU9QAG8RTqOcI68FMQCJjKY0O4rfnSHEK7gUk/MxTStqe+UcuJShMQop1ZTH8Jq4OvvTXi6bjX+vX6iT3O4BpVfE8EqXMMxIsQ96C4NL7GDaMeFIDhW3esQR6O/rHfGyQ5BAZjS9DdLbVJ6ecBeGDJN+BMAzJBKMzOQok95SjcagF6G7tHY+GawldhgXYqciTcdjVED5jzJcDbTXr+oXELc0fUkX0djT9K8oPTsC7d3oyjUUNHDpruBrqBHD+ASbMaPpsKVEUGvYnpPt+YtfBJFEnf22nWNpeAUdHq2vO1OX7QeVha2+ze/d46y5QS/wBW97QB7DNqmYMRwpg+vMakN978oi4hABAsc2u7KF/GGzInKlwGJHrQwtcalD4qU7rrqaPX0ME07AkET22r0kCHuz8x8po4ptbWtt/KNO1SCxPJh4b83e9I37PySm/8xY28vSNu1C6HbWurO5NrMPLaHQQSQJWYlakL9cDP7RE+EN/r+UZHX4af+4jzP/6jIDxFd6x+x/E/iYXITUgDwcaB9D9PBRxyGUAKsG0DWa1NPWCmKTWgNHoaMA1Gyv4d3U11HjvJABIOtWuAHfZhG00ChiR9ftItesasYUdeJA4V3cTl/CSFW8C/hFm4CR3a0UQdNy2V/Co3AiupMsJxUvXStdNPG3hFo4cgA8kipdnaoOrbj7xB8Tq3XhVHBlTThlX19ZwmYVWxNXsdAA5AqCbVG0QpnDlliRTcsQ3ozjnYDeDshKim1A1gTTdm/mejQK4pxHKKBj0TRmvZhTYGKmn0qVgbZo7mOBBGLwjA7vRufPUPyuIF46apLBypRJCe+XrY65Q4dgWoY3x2Mup7Oa69Q3WkceBy8xM5VAhyA1ahgG3LD0j7U3iqsn2+/aDtATGephGTgDmykkktXVT6jkbjlDhw/gCpKQpcwoUohktW+pPyh+jvQi8DuAdolJSmXLFQ4BYDLckOqr3FIMTBTPMLq1JqX2cvQHbxiNptBqbm82w4H8n/ABKKKQAk87R8QCZGRDhCASTV1KFQXarV65no1aW43isyjuon1qYfO2HF6GWmwof0is8QrMuKq0rUBUPfJ+Z+cZvH4fT7R1aE+CSyZiBzFbReGDlhOHABdxeKp7M8PUoskPbbXrFx4bClMhKWslvzg2rYiogRGwBQoMWeKygUqOtfX9oqLi8rKp/d4snjk1eRZFCCYrniS8y6x4D+WMzTrhcy0uxvGhMwaXcqQavW/wApNDQO2nywVKjQD8Rua6Cp0Nn5PyiuP6MuI5JsyU9VB01ZyCCw5mvsxaWGnBadil+Zq9qc44zX0Cq5gO5z+/8AvMRKg2E+/P8An+Yr4qQUzArWpSaUd6gAM/0aFTj6VBYWB3k1SSNaEp2P6RZ2MwAC8yhtrzqXsPpakKXHOH1ykUblerVBbn5xvRana4PeBYe827Mz/wCIlh+9tQ8wXJ2pQCjdASGKwDaON2o32Olj9ITOHYk4eax+U6Gz9KfpD/gMeiYKi58XfYFgXewb1fpvxCMIq2UMX1YAvz/aNl8OUkEt76eUNyMKkjlfo/tn9Y0xEoZQlrNtalLco+27s8z38TtxFTEYZWQHY/T9oUuInNPTS2Y/b7xYM8hkjdzf/Fc8gl/83OEPFJ/4khjRItu535Jg2mrIIxDU6vzLApjJ2Z4oqTaqHqGc6hOUb1tV3MQu0c4Kro4NWpWoZVjQtdwnlEuXKQlCahxUh7VFSzFtfygVxuZlDEqsQx1Zmck/UFwG2igtCqSwHJjOrsBbiL7J/lPmP/3GRy/rNW6f/rT+UZGcCKZMPYpfdJJGWgccqBIe9765nqS0QJUzKFk6jrcFx50/OOeJxNdnu5qWDB9hU0pck1LgeMScxG5DdXbTeDl8nAmNNiv1ntPVziJqT/eQW5uIt7hTkhrlPWjkAs9KsP2MUxi1MsE6KDjZjWLX7L47usaky012dNjRrqPV94S1SqM8c9Iaqwk5zGxdg1BozaUcs1B94r/tPiGUqoINdbW31PWwhu4hisqTXT3ox3/eiDxA/EV3jcuoVfLSjk30fm8fV5GEX6RvzErQu3QQfIlqUkqUDlJcbKYtY1ygg9a7F5WA4uZQCTKSuuYFRLAncC92vG2PWcjuwDZQmgAAYJSBYAfSPOG4QTVoSQ6DQmvdpdwLaPFY+GUWVeXYM9z9f0nL2a+2+7ePoB7Rl7MPNmFSgkAJ+WwA5AN3aW0Y3gn2hx4AIBahrrcM7fUb2gLgZ4BMsPlB7tXYhgQTchwPStoidp8SEhqZqu29Afo8K2tWo2oMKJ3fheieoBrmy3UxU43jakwGw0kmupjpNJmLA51gouWEBtoS09ZclzAau7z7vkIf7K40S7157Vp43i5cBOCpV/zilOy+EKpiSQ4e31i4eG0ppblaFNfbt/bmeahBgRM7TpI+JlHOKx4mhlxbvaaVVTaj94qfjHzW1gtB36fdCnBpMHIxKpMwLQopO4NYuPgXFgtKJgNFhiHfKR8wGtz4isU1iEPDL/R9xcpUqQo0NU8lCnrQdQN4leJ6Xzqd46r9pLZwOD+ktucsq7pq1TzYMPqfOImPwR+GCq2lS5bXoG9I1wuJcCoYXHm1eRaJU55pI0JCQbtbMAP5rbAAm0c4tQ4weYO47gCJWPGwkJJUCQ5bRgQO9S9wObRF4NxVctYlqLjTmLCo8vCDXbfDAFSEnusMxDmganMlh/pD0rCpjpgMqURQuwFTTryLvS4fUx02krFtXPWCK7gQZafDeI5rH3+bdInGcCCQagf+tT625RW/Zzi5+UmovX89/HWGyXiSzUDg+J8HiolYrqJMhXXslm0ieY6exFdGvWza6wq4NHxMStVmCSzXJcgPtUDx8CU4lig6yPftoF8AmhS5yyWy5RU6pFvFz5CN6NgUBjWgJs1PPQCE5pAI2YlqkXanNlfKYG8dmhqM7k9RzAF6Avr4RLVNzE7Dc7BqeDb+MBuLz7jUM7Cnidbt/liiWG3MpWV4fiLrjl5n84yNX5n0jIUzPoUx+HKaOnwYc96ivukR8BMQiYFLSVAMWBZiLHzEMKpeYZSGJfQ0ejsnu6G3m9IA4qQRVjU1cEGwe4e8bbI5EHUwPBjLw7stKxclc0KUFFSu7/KaU51LvsrlE/s0pctwsNMl91Q3JrmtZmIf6wN7HcYMlWUlkqvWgIFFGngeXSDmLTLmK70woWkqTnABzB+7R6gjTRw1o8fTvqFyp5E0+op0x9XeTOI44KSait2++j0v18FibNCU5zck02ALAOejvao5x3xSFhQBKSHSHS9SSwo9ySBdoH8bUn4hSghgWHR6NyIr4iDaWlq7QH64zEdbrU1CBKzx3nKbiCtgAb22/eDUkZQUSSQSBnVXK5sLd1Rc1dq1ehiHwTCE6Am9SBr82arDwpTcOakH4Su8QSWAP4g1jpysOthFh1byzjrFdA1Saqs2fCD/AD2z+sk8L4apN02r3iKs2woDmo9S2geEjtVj1KWQC9S3R7w38W43llhKSzjTS9RzPvnX06YJkxStAaRzlrZGJ+jahmVMd2nnCsOXcxMmSyS9bxO4TLRZVKiJuJSknu2faHa1UVcSWtOwxs7DYAFOYDVvzh6kSymFfsPj0IQQQAQ8M442hZygCly8QPENKblbnExZcS+McQLx0BvdoqTtTLGYkbxYnafHkqyJIq/WKx49M7xSbufCHdCm3T7TPGbAIg7DrBDG0dsG8mYFhyORZwaEP7tENJjuJrprpbzjzy8nHY8SZqG9Pzlp9nccJgBBzA/KQ7lrgg97ViOvWGb4CgBkDaEmjO7Bza45uSdYq3+j/iJTPOHUWE6qCbfESyhezhLPd2i3cJM0OoLsw8e8ORHTe0cprtJ+H1JRjgdR9IWpfNr3CLXFOFlaVEhDs6chauhADV1dtN2evOL8KXJJWzgk0AoijOzNWtbUAarRcXE05mLk/wCUEvq7C/htWFvEBKkqTMSOdLjk217tfrBKdU+ms45EGuTye0qaVM+EsKBob60elPKHLBcQdi4oNG2gB2l4UuSsi6VE5SGY2Sxbuu2v7wK4bjV/KHJ0r469I6dbBdUdvORJ2t03mEOvWMPE8UGV9eg9+seYJJlygDRUw5yNQDvzp684gyJDkGYxYuEA0LfzHytvBvCpzOtVzrsNmgum05UYjnh+mNILt1M9wNASrSp0YCrnVtG2gNxIhQWp7GnN3NDrblDFPSEy9A/rl1F6Db6uIU+JTiza3PVgKQzZ6RiNFgeYLb3SMjX4fOPIX3QOY7oWjKAehHNwKFmqCKbPETFoSVMk2egDVetaDx/KO2GmO1QwF9rvlY2OzEsau8Z8Ri4DEVGhSQbgAO5Aez1hodIpjBgz4BB7rAO18w8ddfoYLcMmKUAmjAXevIc/dIjS5RWoivjrRwTsCxbVlDYiDkqWmWO7t6w3o623bu0neI3Jt2HkyJjphSyRRu8NKh6l23+kLyVuo1cPS2m/n6mJnFcTmLAj8/GPOEYPOrlq7HQnU+6bwzgby0HpKGYBR1MZ8BNySiBq5ykFzXvd1SGDDnUeMCMfilKWDoDsAPSJOOkTUFOSqQHY0elqUeg8YFcQxri2UC4d69Y+u1Va1E55MqaXwbVDWpuX0Agknpgc/wAyDxnGO8CMEoipsS/hSMxM34im9ttDNwzg/dqA501atbH7XMRtPpzbkyn4t4oVu3KeklcN4GMRlyzQCbhw76gCJXE+AzpBB+YctOsRk8MXL76C3gWOhbVnLeW8MOG4x8WX8NYZZ166k69aQw2nZBxJj+Nc7h+004aQE1OWmm8azppR3kqqdjEjESUKQK94XbXnAnEYhCQcq3MB2och57R4hvG5T+hgfjnEV2FH1helIMwuXMTMVmnzDogesdkTUyRQEn7xgqDwOk3bryvC8mbngBKXdjAadJIWEjfeGSRKmzB3jlSdBfTU7vSkaL4WEsWrqb/eCrWM8CTTrGLfmEZ+UHqlkEFJZQZQI0Ir9frFo9juPjEyw5ackd4Fu9zbV9dX6wiTMMCPD9IhYVRlrvR69SKGA+LeH1a2r2Yd/wC9ofS61qicc/KXVNZThvBiWe/nQ+ML/EpGQkizGny3GqQTv7Z4lcGx/wAVAJKbB3HW3SJGOkONG9+ZjgnrsrOGlsrkHETeLYcTJZSbizh2Lc/OKzV3VFJ9t9/vFsYtAHv0PWEftNwzvlSTzbejqZtvsdoueF3Yyhi5XmcuDzhZR8Xr15wxYaaLEt03agtT6QmcOngGv7wXlT7B9mL3B3OlDrzjpqnxzN7+MQnxPFirCrNYPX6Gn7wDGFWS5BBIsBvTdw8F8NhviEEnw339BHnHMUEBnDl6eNzvct0hLWaolwiDmBtJQgQB/Cjf35xkbfG5+v6RkL5efboyS+FzUgZkC+VyoVqwcgggHR7sdnidPwIFVKCi5qbML924+Vq17j6tBrI6RowQc29H8KpL10FHLQPIzLykPQEhx8o1r8woA6dkHRot1qAZJstZhiQJMtQLJBd6Ua5bwqW8DtBLB8P+I+dQIAdSQ4oLpSW+YUDEXYWdui5OVOpKvlLUILAy1Gt2o+6R+FokY9UvD4FaFpJmzxQO3d7rlSn0AJFalqGsMpqN3pUxM1AtzEBcwKUAK3vfz99IbuzeFCUhwX2qHfNuKUtej3hZ4fLBU466NcUDmtGo3Q7PfCJISipBDOwZg2pY/do+ub0mdX4Npwp3mB+OYhQdOVmo2xFHpfXWEfiS1m8OvFpqU3JPU361hL4tiHoLRIubJxOo1yhaOuJH4LLdY170WJgcPlQx9WfT8xyhK7KyQVOdD+1YeVzA9/yeldvfOlfSALWDPy/xBi1mBPJ007Ur6vVvd4GzkZiDqIITxpudS/8ANbm7COBla0rzr4genSGm5GJNyROSZ6wGd4hzJT2ETZgjXLCbaafK2ORBf8I0cVYUZgdYNLlUqw6kfeIk9Naed/EaR4KQvWNV2MZ3wZcN76N1++8TBhyaaVDsOXP7aRAw66vZutuTPR4IycSPxE1awem5rY0tp4x6hCmbNOeYLxKCh+rfpAfFFi8MvEJQanMvvtyt6jyV+JBnf37EK22bWIhaR6sGOvYear4aCXLv1+YhjSzN5Q6zhmD08PbxXPZCflSlLkFrtSrHreLEwy3ArWOO1i5tYN7/AMTptK4evjtAvEcEbjy+nt4VuNYQmuxLtWjEfeLBxyHH6ejwtY1AuSxG1drba9TGdOPLbIjqVBs5lY8QwZSpO5JOwvQOfdWuI5ycYQe9Qu/qPIXg5xrDC9g99QNPIl21gLipFNuvTQilXDtQ0IepjoqbNy5k5hg4hzhuOAHPTYW/KAWNVmWcx6mp5PHHCz1A5a0jbGe7be/ONBRknvDuoerd3E6/HR/Krzj2Bub236RkY8mKYlycEw5UWdJYVDsXcEKKcjsasSK1peCM6QEgUDkA0N1UJymyu9V2FRWpLScNicpAJL90XPM0IFflTQ1pW0deIrBANS/XvaDWul357wbWaryqy2eccSSi7uBB+ElhTU7ua2XnRwzi7lwHdw1oU+02J+NOOUFmYBJAB5JSo1Lu7AGg2gxxnivwwySO6Hu9WoAXvQDKC/rCxhcarOs5iCSaMjvHY1AOhd9LUhXwNmYknpGnqHWTOHYIalyD+JMwpca/KdLmlwOhueoCVc6OxIpW4FHpvZ4E4NbKYFLFL0KnoVE0SkgfMmmj849xeJAo7Na2YeJ16biprF7UuAMTpPAaWJNh6doP4m3jrqX6mFbHjWGPFzCqiE13+55QAxWCU7r8okWdcy34irOmFGZI7LTWKq3J+kNiJyWYkAtq/ju8ICJplLCkwfwqpk5gh/ImlqsLU15xZ0jKyY7ifnOv0zracw5iMeDQEm4s4+nKO/DOGYicsBEuYxauVTAGxUQHAYE2iNwnDYj4qUpOVZLClQ9HZQp1PgY6iRPIV31FWfLcmiQoqJqRoKc4d2Z7yUQohbE9nJrsmfh1F2AC1A03dNDaB0zheIR80ogXBzyyGDuQQpt+VIgS8ZPCnBUSxIJJfu61+kTsF2lxKFKIXmP8pSFCZYWPIDyjxqz2M9AXuIRwnAcSt2RlpUKptsCKiorEXi3BJ8lJKkIIFymhS2pdncWaIuK7UY0/iKAXDJSBZhQAOT3gPKBmJl4hROYklRIqq5DPTxHnATT/ANocMAPTOKsWQbEBj9Olb19iN5eMvWxehOtXP1jTE8OmICT+IkgC7AAFRJ8RbY8ogLQtJYsTv0/KF7EAPEYQ5ENrxgSwKTWhZjTWp9hvIJxCYCC3h4RzmqJcfm3O+pp+kduE8PM1YKvle2/Lp73hDVBUrLsYVU3GMHBVnKggjKya61A28dzD/hQGBrblr78IVcFgTLAUhAUmpZ6PZ2an5wxy8T3aoIozAP5GOTbax3dpW0KFNwkjFrAf9PU+7jwAYoBTsfUbX+37RMnY0GhNf8Lln6uYjrWa/M2lKHrUePWMI4B4lRHCnEEY3AODQFxo56EWIG42HJ4TePd1WgSzWDXO1BfTnpQWKMS1CDlNAA2rbtV1bn5YSO1+NcEJSGJDlm83vZm5xQ0tp8wL2ityDJMWQl6tdvuI6YgEgRzwrrU5r1t75RJ4gGAG9fflFhes1Wv5ZMGe7xkY8ZG8xPEtqfj1ZcwIIDbMn8IJZiBex1Uz0ctwPHfHlFCiM47ySSKKqCC163cVCtNK24dxYhg7NRwTboXAOpIYs20MPAMf8KeCT8wADH8RoHD0cFmFn5ExM8UoNtJ9xyP0kuoGqzA7yZ2tlpIKwwzGrgUJ5kgeWo8YTFKUkuHBLOwevXMHckV6eLF2jnqXMXLv3rkh1PUEg1BZTPS7bQAmSsy6Mbsz5WIu4QxFd9WvcvhKsqrHHHMI8Pxkyr/EBBsUkJoHBZgbuaqN36kV4g5SVpGYkMcozMASG1y3F9rtC/h8KkKCSsOSe6E5Xe2VBbxVlZqgHR1wHDApPfUA4ZT/ADpAYE2IFFNR8oWO6Ya14cuhHXMp6fWilAf+sjYbFzJvdTKADXCC4dq5nbKdrcjSAvGcIUkhQynYA01F9xDbhTLlrKCEgjdy9mYKv8woXNCKMYj9pcMlQzZW5vVvyvpzcwzdWQuDOj0Otq1a5r6Hj9fnKuxo0iZwPicyWRlWRWtdAAwqbfRhuY243hWrAvAzWWHsbx5ozhxmcz4vQUsKmWlwTjSVLQVpAYuFPUfiUwINWtYaXqT0heHmz8qVkKylRKMqU95i6gm6mZ3NKCK1l4kpyi9+fzMLeXlyg7hMZLmMoMgpF0KylQJb5dwyQdNTF9tN3UzmDx1EN4jgsnRRBBdswYEkgEElikqTbY9Y0kdnxOBMqaCopDd0BLKLACtHbqxjlgpwADKcf2oBAyuEguVMafJ0OePOEzgkkFRDJSkM7gNMCQ1daNWhjJRwDg8/SByM5InbE9n2mDNVqBIUSEuWV3ia1BqWLtcUJHh/CJFEzFBByuDRSiHc0uHAJLsaUOwHE4wpOZJAQpNAXospUWB2JylyfxkaQM/jwJyx3iwUUqfk4N9D5ZTybw0Mw6zaZzx0jHxo4WSxyBYNypZFgzqANahR5EJB1MKGMx8lShkkgZXd1qCWGVwUhQCh3r0o99OeJ4sJocpSKoLACwcGnNgWtQ8oBz54Fuj9HqPepj41bBzGa68n1QlNy5ky0oS6i1BbX0Dw08OwgQmw2ZnpTwvC32SwxmTDMNQkBI6m/kP90NapozNoOXneOO8d1nmXeWvRfvH9LUEOTD0oil33c167abaeMta6V6VD8r+W8QcGGAoTZ9K6OdQax2mzaEct+Wrlx16GI/KpzKtZBaDsZNqaA61a+r79DW16NpJBIHdFmdgR9cu1m5xtiCXBbe1NGo4ro3jGpmAXbW7c3FBUM8CJyMTZI3SNjV5EZioBnZ3bqA/Q0GnjFf8AGFAqJDNvahoxBr5BofcdKzoLqZLWdn8r1FIr3jUkAlqjfyYXofE3ih4fjJ94GxuonnBUOTy8vf5Rx4rMJV0DeUZw6dl9YjY6YSYsK3OJ4bAK9sjRkeRkazFcwuhDGv5QWTNJSLvTLv0LG7P5nrAtFKRLkEjwr5e3jJfjEXtTkGFZ8taikqAFwXoymURUig727OHfYfh5GZZCh3iokWdmJ/CpJ/fdiCPE8elaUgXYXqxejpLg00t3vMdg1lVWfTvVfdqsCBqRZ92jOhJ2cjEIMRn4Lg0LlzEhSAQXGVYSwHzFSpSXd6Opw7UJqSvDFFQABUoMliAxoCUnIKvUl5jm3iucOxihMIDtYJSZffS9RmUCoIYBwE66uYPcLJSp2rmJdJEwZzQ98pqwYd1YsWSGAhtldicnjqIO5doOO8gzgETGmEhQplJHdBch8yRRq0BoCWOpjEyhMQGy3ukoNdqHXnWhjhxSWuYuUBlcEHMAq9CAkhx1IOz2jriOJCWpCSaHZzeuYqJUGc1Yln86W3zqRxzCeE6s6O0ZOFPX/MSuNSrpOkJ+WpiwO00llOAz1b0hGxSGmGJKHDFZ0fjy7glokjCcTKWFxqDWCMvikss+YM1aGgDMQRXrpC+LwXwkgKEdHoHe1es5O1EHMJSOKf37io8K6lxaPVccqoipOr1dlB//ACeB03hoFWiP/BHanvWHXqs9hABKzzmF1cWSt0USkpbV22J0HjsOcc8bjUqUVDW1TZ9uteT8oGLwfhGiURnybO80K06iSZ09qveIQBUQBUksBuTG00xO7NIeeDfKKdTr5P5xH8RtNNbH2EYprycR14fhfgYZCLE67mpUej0jyWh76nXQc4M8MmYZSss0qCg7AgZAVVGbo1m8yYlcQ4UEKBQ/w3u71arcv1j85N2bMN1PMcUAnImYZLCzHVhy/T1jjNmX9NOZfyPsPHdt29/r9IH4uex89fDr782bgcQ9Z2zeYb/t7pTwgHxbGsnKT9/IW/aCU+bTXnpp6beUDpcgLcljyrZoHRhTuaZucquRIh4mopZTkAUa9aAM1eR9awu8XQ9dHqfv6Q2YqRKCaC9RsakaXNCPKFziSQrz9jyihp3XdlRiaqO6vmB8JLJcm0RcX8xgsEsnYQIxBqYfrbcxMA04R7HkeweYhhH5/SCEnT3+IRkZAT2mbJBVb3vE3hn/AFEv/wCQf7oyMhyiDEOyvmxPQ/8AtE/in/Lw/wD8R+gjIyHF6CeWfFCXG/8Amy/8M3/2gDxTT/L/ALTHsZD3h/wxLVfDJHaj5JfT7RX3E/mHSMjIiN/zzuPE/wDw1/veRF3EMXALHw+sZGRf8J/9v77TkNR8EnYm48fvGqbef0jIyLy9BJ84YvWBEz35mMjI9PwximR533gv2L/6g9PzjIyOS8f/AOJ4/R1jVK/5yfH6iHHB/wDRSeqv9yoyMj891HVPqP8A7CUdWkca/wCE/QQAx3zJ6RkZFG34RDp8UjTvlMeSvlH+E/7BGRkLCeX/AATljbf6oXcXb3sIyMhunrCVfAJDnfJ72gRO06RkZFGmAac4yMjIYmJ//9k=\" >\n            </figure>\n            <h3><strong>".concat(st.heading, "</strong></h3>\n    </header>\n");
};

exports.default = _default;
},{}],"components/nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<nav>\n<span class='fas fa-bars is-hidden--tablet'></span>\n<nav><ul id='navigation' class=\"is-hidden--mobile is-shown--tablet\">\n                <li><a href=\"blog/blog.html\">Blog</a></li>\n                <li><a href=\"about/about.html\">About</a></li>\n                <li><a href=\"contact/contact.html\">Contact</a></li>\n        </ul></nav>\n";
};

exports.default = _default;
},{}],"components/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  return "\n<main>\n    ".concat(st.mainContent, "\n</main>\n");
};

exports.default = _default;
},{}],"components/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<footer>Shontrae Pasley 2019</footer>\n\n\n";
};

exports.default = _default;
},{}],"components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "header", {
  enumerable: true,
  get: function () {
    return _header.default;
  }
});
Object.defineProperty(exports, "nav", {
  enumerable: true,
  get: function () {
    return _nav.default;
  }
});
Object.defineProperty(exports, "main", {
  enumerable: true,
  get: function () {
    return _main.default;
  }
});
Object.defineProperty(exports, "footer", {
  enumerable: true,
  get: function () {
    return _footer.default;
  }
});

var _header = _interopRequireDefault(require("./header"));

var _nav = _interopRequireDefault(require("./nav"));

var _main = _interopRequireDefault(require("./main"));

var _footer = _interopRequireDefault(require("./footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./header":"components/header.js","./nav":"components/nav.js","./main":"components/main.js","./footer":"components/footer.js"}],"../../../AppData/Roaming/npm-cache/_npx/20776/node_modules/parcel/node_modules/events/events.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = $getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  var args = [];

  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);

  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _components = require("./components");

var _events = require("events");

var state = {
  Home: {
    heading: "test",
    mainContent: "\n<div class=\"hero\">\n    <a href=\"#\" class=\"btn\">Click me!!!!!</a>\n</div>\n\n<div class=\"section-container\">\n<section>\n    <h2>What About Me?</h2>\n    <p>I am a designer by fate. I like to find the beuaty in all things. With the wave of the future being technology driven, it's my hope that I can marry my design abilties with my new skills in web development.</p>\n    <a href=\"#\" class=\"btn section--btn\">Learn more</a>\n</section>\n<section>\n        <h2>Tech Stack</h2>\n        <p>Currently, I am learning the art of JavaScript, CSS and HTML. Daily, my skill set is improving with ongoing instruction and practice. I am also in daily practice of building my portfolio.</p>\n        <a href=\"#\" class=\"btn section--btn\">View Resume</a>\n</section>\n<section>\n        <h2>Hobbies</h2>\n        <p>I love to draw. If I could have \"dream time\" spent doing whatever I wanted, it would probably be visiting vintage shops and a day at the farmer's market. That day would probably end with a good movie on the sofa. That's something I don't get to go often.</p>\n    // <a href=\"#\" class=\"btn section--btn\">fill in later</a>//\n</section>\n</div>\n<!-- <div>\n    <a href=\"http://www.github.com/trae-pasley\">my github</a>    \n    <a href=\"http://www.twitter.com/rcmdecor\">my twitter</a>\n</div> -->"
  }
};
var pages = {
  Blog: {
    title: "Welcome To My Blog"
  },
  Home: {
    title: "Welcome To My Site"
  },
  Contact: {
    title: "Contact Me"
  },
  About: {
    title: "About Me"
  }
};

function render(state) {
  document.querySelector('#root').innerHTML = "\n        ".concat((0, _components.header)(state.Home), "\n        ").concat((0, _components.nav)(), "    \n        ").concat((0, _components.main)(state.Home), "   \n        ").concat((0, _components.footer)(), "\n        ");
}

function handleNavigation(event) {
  var component = event.target.textContent;
  event.preventDefault();
  console.log(event.target.textContent);
  render(page[component]);
}

render(state);
document.querySelector('#navigaion li:nth-child(1)> a').addEventListener('click', handleNavigation);
document.querySelector('#navigation li:nth-child(2)> a').addEventListener('click', handleNavigation);
document.querySelector('#navigation li:nth-child(3)> a').addEventListener('click', handleNavigation);
render(state);
},{"./components":"components/index.js","events":"../../../AppData/Roaming/npm-cache/_npx/20776/node_modules/parcel/node_modules/events/events.js"}],"../../../AppData/Roaming/npm-cache/_npx/20776/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52445" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm-cache/_npx/20776/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/ShontraePasley.e31bb0bc.js.map