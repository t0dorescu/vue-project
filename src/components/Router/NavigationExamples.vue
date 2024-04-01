<script setup>
// literal string path
router.push("/users/eduardo");

// object with path
router.push({ path: "/users/eduardo" });

// named route with params to let the router build the url
router.push({ name: "user", params: { username: "eduardo" } });

// with query, resulting in /register?plan=private
router.push({ path: "/register", query: { plan: "private" } });

// with hash, resulting in /about#team
router.push({ path: "/about", hash: "#team" });

const username = "eduardo";
// we can manually build the url but we will have to handle the encoding ourselves
router.push(`/user/${username}`); // -> /user/eduardo

// same as
router.push({ path: `/user/${username}` }); // -> /user/eduardo

// if possible use `name` and `params` to benefit from automatic URL encoding
router.push({ name: "user", params: { username } }); // -> /user/eduardo

// `params` cannot be used alongside `path`
router.push({ path: "/user", params: { username } }); // -> /user

router.push({ path: "/home", replace: true });

// equivalent to
router.replace({ path: "/home" });
</script>
