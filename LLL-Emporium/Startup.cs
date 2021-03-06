using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LLL_Emporium;
using LLL_Emporium.DataAccess;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;


namespace LLL_Emporium
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IConfiguration>(Configuration); /* -> any time someone asks for this thing,
                                                                   * give them the same copy */
            services.AddTransient<OrderRepository>(); // create a new thing anytime someone asks
            services.AddTransient<OrderLineRepository>();
            services.AddTransient<UserRepository>();
            services.AddTransient<CategoryRepository>();
            services.AddTransient<ProductRepository>();
            services.AddTransient<PaymentTypeRepository>();
            services.AddTransient<TransactionTypeRepository>();
            services.AddTransient<TransactionRepository>();
            services.AddTransient<RoleTypeRepository>();
            services.AddTransient<ProductTypesRepository>();
            services.AddTransient<OrderWithDetailRepository>();
            services.AddTransient<ProductWithDetailRepository>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)

                .AddJwtBearer(options =>
                {
                    options.IncludeErrorDetails = true;
                    options.Authority = "https://securetoken.google.com/lll-emporium";
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateLifetime = true,
                        ValidateAudience = true,
                        ValidateIssuer = true,
                        ValidAudience = "lll-emporium",
                        ValidIssuer = "https://securetoken.google.com/lll-emporium"
                    };
                });

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "LLL_Emporium", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "LLL_Emporium v1"));
            }

            app.UseCors(cfg => cfg.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
