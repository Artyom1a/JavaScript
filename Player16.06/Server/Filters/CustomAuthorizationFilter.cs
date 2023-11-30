using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Server.Filters
{
    public class CustomAuthorizationFilter : IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            if (!IsUserAuthorized(context))
            {
                context.Result = new UnauthorizedResult();
            }
        }

        private bool IsUserAuthorized(AuthorizationFilterContext context)
        {
            var token = context.HttpContext.Request.Headers["Authorization"];
            return !string.IsNullOrEmpty(token);
        }
    }
}






